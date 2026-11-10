"""Antigravity 2.30.0 Chinese UI patcher. Python standard library only."""
import argparse
import copy
import hashlib
import json
import os
from pathlib import Path
import struct
import subprocess
import tempfile

ROOT = Path(__file__).resolve().parent
DEFAULT = Path(os.environ.get('LOCALAPPDATA', '')) / 'Programs/antigravity/resources/app.asar'
MARKER = b'\nrequire("./chinese-bridge.js"); // antigravity-zh-v1\n'


def digest(data):
    return hashlib.sha256(data).hexdigest()


def decode(data):
    if len(data) < 16:
        raise ValueError('ASAR 文件不完整')
    first, header_size, payload_size, json_size = struct.unpack('<4I', data[:16])
    if first != 4 or payload_size + 4 != header_size or json_size > payload_size - 4:
        raise ValueError('不支持的 ASAR 文件头')
    header = json.loads(data[16:16 + json_size])
    return header, 8 + header_size


def entries(directory, prefix=''):
    for name, entry in directory['files'].items():
        key = prefix + name
        if 'files' in entry:
            yield from entries(entry, key + '/')
        else:
            yield key, entry


def contents(data, name):
    header, base = decode(data)
    entry = dict(entries(header))[name]
    offset = base + int(entry['offset'])
    result = data[offset:offset + entry['size']]
    if len(result) != entry['size']:
        raise ValueError('ASAR 内容损坏')
    return result


def build(data):
    header, base = decode(data)
    header = copy.deepcopy(header)
    package = json.loads(contents(data, 'package.json'))
    if package.get('name') != 'antigravity' or package.get('version') != '2.30.0':
        raise ValueError('此版本仅适配 Antigravity 2.30.0，请先适配新版本')
    main = contents(data, 'dist/main.js')
    if MARKER in main:
        raise ValueError('已经安装汉化')
    changes = {
        'dist/main.js': MARKER + main,
        'dist/chinese-bridge.js': (ROOT / 'bridge.js').read_bytes(),
        'dist/chinese-renderer.js': (ROOT / 'renderer.js').read_bytes(),
    }
    for name in changes:
        directory = header
        parts = name.split('/')
        for part in parts[:-1]:
            directory = directory['files'][part]
        directory['files'].setdefault(parts[-1], {})
    chunks = []
    offset = 0
    for name, entry in entries(header):
        if entry.get('unpacked') or 'link' in entry:
            continue
        if name in changes:
            chunk = changes[name]
        else:
            start = base + int(entry['offset'])
            chunk = data[start:start + entry['size']]
            if len(chunk) != entry['size']:
                raise ValueError('ASAR 内容不完整')
        entry['size'] = len(chunk)
        entry['offset'] = str(offset)
        block_size = 4194304
        entry['integrity'] = {
            'algorithm': 'SHA256', 'hash': digest(chunk), 'blockSize': block_size,
            'blocks': [digest(chunk[i:i + block_size]) for i in range(0, len(chunk), block_size)]
        }
        chunks.append(chunk)
        offset += len(chunk)
    encoded = json.dumps(header, ensure_ascii=False, separators=(',', ':')).encode()
    padding = b'\0' * ((-len(encoded)) % 4)
    payload_size = 4 + len(encoded) + len(padding)
    result = struct.pack('<4I', 4, payload_size + 4, payload_size, len(encoded))
    result += encoded + padding + b''.join(chunks)
    # Verify every packed entry before writing an application file.
    for name, entry in entries(header):
        if entry.get('unpacked') or 'link' in entry:
            continue
        expected = changes[name] if name in changes else contents(data, name)
        if contents(result, name) != expected:
            raise ValueError('重建校验失败：' + name)
    return result


def atomic_write(path, data):
    descriptor, temporary = tempfile.mkstemp(prefix=path.name + '.', dir=path.parent)
    try:
        with os.fdopen(descriptor, 'wb') as stream:
            stream.write(data)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temporary, path)
    finally:
        Path(temporary).unlink(missing_ok=True)


def require_closed():
    result = subprocess.run(['tasklist', '/FI', 'IMAGENAME eq Antigravity.exe', '/FO', 'CSV', '/NH'],
                            capture_output=True, creationflags=subprocess.CREATE_NO_WINDOW, check=True)
    if b'antigravity.exe' in result.stdout.lower():
        raise ValueError('请保存工作并完全退出 Antigravity，再执行安装或恢复。')


def operate(action, path=DEFAULT):
    path = Path(path).resolve()
    data = path.read_bytes()
    backup = path.with_name('app.asar.antigravity-zh-original')
    state_path = path.with_name('antigravity-zh-state.json')
    if action == 'check':
        package = json.loads(contents(data, 'package.json'))
        installed = MARKER in contents(data, 'dist/main.js')
        if not installed:
            build(data)
        return f"版本 {package['version']}，汉化{'已安装' if installed else '未安装，资源重建校验通过'}"
    require_closed()
    if action == 'restore':
        state = json.loads(state_path.read_text(encoding='utf-8'))
        original = backup.read_bytes()
        if digest(original) != state['original']:
            raise ValueError('备份校验失败，恢复已停止')
        if digest(data) == state['original']:
            return '当前文件已是原始版本'
        if digest(data) != state['patched']:
            raise ValueError('应用文件已经发生变化，请先检查更新版本，避免覆盖新版本')
        atomic_write(path, original)
        return '已恢复原始界面。重新启动 Antigravity 后生效。'
    patched = build(data)
    if backup.exists() and backup.read_bytes() != data:
        raise ValueError('已有其他版本的备份，请先检查备份文件')
    if not backup.exists():
        with backup.open('xb') as stream:
            stream.write(data)
            stream.flush()
            os.fsync(stream.fileno())
    state = json.dumps({'original': digest(data), 'patched': digest(patched)}, indent=2).encode()
    atomic_write(state_path, state)
    if path.read_bytes() != data:
        raise ValueError('应用文件发生并发变化，安装已停止')
    atomic_write(path, patched)
    return '汉化已安装并保留原始备份。重新启动 Antigravity 后生效。'


def gui():
    import tkinter as tk
    from tkinter import messagebox
    window = tk.Tk()
    window.title('Antigravity 常用界面汉化工具')
    window.geometry('620x290')
    tk.Label(window, text='Antigravity 2.30.0 · 简体中文界面', font=('Microsoft YaHei UI', 16)).pack(pady=18)
    tk.Label(window, text='安装前请保存工作并完全退出 Antigravity。\n安装会备份并修改应用资源，应用更新后需要重新适配。',
             font=('Microsoft YaHei UI', 10)).pack(pady=5)
    status = tk.StringVar(value='请选择操作')
    def run(action):
        try:
            status.set(operate(action))
        except Exception as error:
            status.set(str(error))
            messagebox.showerror('操作未完成', str(error))
    row = tk.Frame(window)
    row.pack(pady=20)
    for label, action in [('检查版本', 'check'), ('安装汉化', 'install'), ('恢复英文', 'restore')]:
        tk.Button(row, text=label, width=15, command=lambda value=action: run(value)).pack(side='left', padx=8)
    tk.Label(window, textvariable=status, wraplength=580).pack(pady=5)
    window.mainloop()


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('action', choices=['check', 'install', 'restore', 'gui'], default='gui', nargs='?')
    parser.add_argument('--path', type=Path, default=DEFAULT)
    arguments = parser.parse_args()
    if arguments.action == 'gui':
        gui()
    else:
        print(operate(arguments.action, arguments.path))

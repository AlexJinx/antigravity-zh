"""Install the bundled plugin using the documented local plugin directory."""
import json
import os
from pathlib import Path
import tempfile

SOURCE = Path(__file__).resolve().parent / 'antigravity-zh'


def install(parent):
    parent = Path(parent)
    manifest = json.loads((SOURCE / 'plugin.json').read_text(encoding='utf-8'))
    if manifest['name'] != 'antigravity-zh':
        raise ValueError('插件名称校验失败')
    required = ['skills/zh-interface/SKILL.md', 'scripts/tool.py', 'scripts/bridge.js', 'scripts/renderer.js']
    for relative in required:
        if not (SOURCE / relative).is_file():
            raise ValueError('插件文件缺失：' + relative)
    parent.mkdir(parents=True, exist_ok=True)
    target = parent / 'antigravity-zh'
    files = sorted((p for p in SOURCE.rglob('*') if p.is_file()),
                   key=lambda p: (p.name == 'plugin.json', str(p)))
    for source in files:
        destination = target / source.relative_to(SOURCE)
        if destination.exists() and destination.read_bytes() != source.read_bytes():
            raise ValueError('目标文件已有不同内容，已保留：' + str(destination))
    target.mkdir(exist_ok=True)
    for source in files:
        destination = target / source.relative_to(SOURCE)
        if destination.exists():
            continue
        destination.parent.mkdir(parents=True, exist_ok=True)
        descriptor, temporary = tempfile.mkstemp(prefix='.zh-install-', dir=destination.parent)
        try:
            with os.fdopen(descriptor, 'wb') as stream:
                stream.write(source.read_bytes())
                stream.flush()
                os.fsync(stream.fileno())
            # Hard-link publishes a complete file without replacing existing content.
            try:
                os.link(temporary, destination)
            except FileExistsError:
                if destination.read_bytes() != source.read_bytes():
                    raise ValueError('并发安装产生不同内容：' + str(destination))
        finally:
            Path(temporary).unlink(missing_ok=True)
    for source in files:
        if (target / source.relative_to(SOURCE)).read_bytes() != source.read_bytes():
            raise ValueError('安装后校验失败：' + str(source))
    return '插件文件已安装到 ' + str(target) + '\n请重新打开 Antigravity，在 Customizations > Installed 中检查插件。'


if __name__ == '__main__':
    try:
        print(install(Path.home() / '.gemini/config/plugins'))
    except Exception as error:
        print('安装未完成：' + str(error))
        raise SystemExit(1)

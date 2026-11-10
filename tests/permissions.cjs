const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const translations = new Map([
  ['Configure allowed and denied URLs for the browser subagent. It runs in the built-in browser, so no separate browser install is needed.', '配置浏览器子智能体允许和禁止访问的网址。它在内置浏览器中运行，无需另行安装浏览器。'],
  ['Skills', '技能'],
  ['Manage project folders and settings.', '管理项目文件夹和设置。'],
  ['Show 1 breakdown', '显示 1 项明细'],
  ['Check for Updates', '检查更新'],
  ['No automations yet', '尚无定时任务'],
  ['This Computer', '本机'],
  ['Remote', '远程'],
  ['Advanced', '高级'],
  ['Configure allowed and denied URLs for the browser subagent (invoked with /browser). Requires', '配置浏览器子智能体允许和禁止访问的网址（通过 /browser 调用）。需要'],
  ['Configure what the agent can do in local and remote conversations.', '配置智能体在本地和远程对话中可以执行的操作。'],
  ['Controls permissions for remote conversations.', '控制远程对话的权限。'],
]);
function node(text, excluded = false) {
  return { nodeValue: text, parentElement: { closest(selector) {
    if (selector.startsWith('script,style')) return excluded ? {} : null;
    return selector.includes('[role="dialog"]') ? {} : null;
  } } };
}
const nodes = [...translations.keys()].map(text => node(text));
const protectedNode = node('Remote', true);
nodes.push(protectedNode);
let mutation;
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../antigravity-zh/scripts/renderer.js'), 'utf8'), {
  window: {}, NodeFilter: { SHOW_TEXT: 4 }, requestAnimationFrame: callback => callback(),
  MutationObserver: class { constructor(callback) { mutation = callback; } observe() {} disconnect() {} },
  document: { body: {}, querySelectorAll: () => [], createTreeWalker() {
    let index = -1;
    return { nextNode() { return ++index < nodes.length; }, get currentNode() { return nodes[index]; } };
  } }
});
for (const [index, [english, chinese]] of [...translations].entries()) {
  assert.equal(nodes[index].nodeValue, chinese, english);
}
assert.equal(protectedNode.nodeValue, 'Remote');
const dynamicNode = node('Advanced');
nodes.push(dynamicNode);
mutation();
assert.equal(dynamicNode.nodeValue, '高级');
console.log('PASS: permission labels and descriptions, dynamic insertion, protected content');

// Configuration pages use plain text elements for cards and empty states.
for (const pathname of ['/customizations', '/sidecars', '/c/example']) {
  const emptyState = { nodeValue: 'No custom agents yet.', parentElement: { closest: () => null } };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../antigravity-zh/scripts/renderer.js'), 'utf8'), {
    window: { location: { pathname } }, NodeFilter: { SHOW_TEXT: 4 },
    requestAnimationFrame: callback => callback(),
    MutationObserver: class { observe() {} disconnect() {} },
    document: { body: {}, querySelectorAll: () => [], createTreeWalker() {
      let visited = false;
      return { nextNode() { if (visited) return false; visited = true; return true; }, currentNode: emptyState };
    } }
  });
  assert.equal(emptyState.nodeValue, pathname.startsWith('/c/') ? 'No custom agents yet.' : '尚无自定义智能体。');
}
console.log('PASS: plain configuration text translated; conversation page scope preserved');

const splitNodes = ['No ', 'automations', ' yet'].map(nodeValue => ({ nodeValue, nodeType: 3 }));
const splitParent = {
  childElementCount: 0, childNodes: splitNodes, firstChild: splitNodes[0],
  get textContent() { return splitNodes.map(item => item.nodeValue).join(''); },
  closest: () => null
};
for (const item of splitNodes) item.parentElement = splitParent;
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../antigravity-zh/scripts/renderer.js'), 'utf8'), {
  window: { location: { pathname: '/sidecars' } }, NodeFilter: { SHOW_TEXT: 4 },
  MutationObserver: class { observe() {} disconnect() {} },
  document: { body: {}, querySelectorAll: () => [], createTreeWalker() {
    let index = -1;
    return { nextNode() { return ++index < splitNodes.length; }, get currentNode() { return splitNodes[index]; } };
  } }
});
assert.equal(splitParent.textContent, '尚无定时任务');
assert.equal(splitParent.childNodes.length, 3);
console.log('PASS: split text label translated with existing text nodes retained');

const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const translations = new Map([
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

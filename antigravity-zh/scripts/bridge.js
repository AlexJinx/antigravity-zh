'use strict';
const { app } = require('electron');
const path = require('path');
const fs = require('fs');
const source = fs.readFileSync(path.join(__dirname, 'chinese-renderer.js'), 'utf8');
app.on('web-contents-created', (_event, contents) => {
  contents.on('did-finish-load', () => {
    try {
      const { getHubWindows, getHubWebContents } = require('./utils');
      if (!getHubWindows().some(win => getHubWebContents(win) === contents)) return;
      const url = new URL(contents.getURL());
      if (url.protocol !== 'https:' || url.hostname !== '127.0.0.1') return;
      contents.executeJavaScript(source).catch(error => require('electron-log/main').error('[Chinese UI]', error));
    } catch (error) {
      require('electron-log/main').error('[Chinese UI]', error);
    }
  });
});

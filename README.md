# nextjs9-typescript-server-vscode-example

This is example of next app using express, typescript and next, that can be debuged in vscode.

### Prerequesites

Due to [#978](https://github.com/microsoft/vscode-chrome-debug/issues/978) and [#289](https://github.com/microsoft/vscode-js-debug/issues/289) the [javascript debugger (nightly)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) plugin is needed. You shouldn't need the chrome debugger anymore.

### As of master:

- Chrome Works (v79.0.3945.130)
- Edge Works (v79.0.309.71)
- Debugger for Firefox:
- - ~~https://github.com/zeit/next.js/issues/9471~~
- - ~~https://github.com/firefox-devtools/vscode-firefox-debug/issues/177~~
- - [now works](https://github.com/firefox-devtools/vscode-firefox-debug/issues/177#issuecomment-591005586) as of 2.7.0
- - Restart not working properly https://github.com/firefox-devtools/vscode-firefox-debug/issues/188
- Server Side debugging works (Node v13.2.0)
- Node debugging (`pwa-node`) fails when using via Docker - https://github.com/microsoft/vscode-js-debug/issues/383

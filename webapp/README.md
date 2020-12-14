# nextjs9-typescript-server-vscode-example

This is example of next app using express, typescript and next, that can be debuged in vscode.

### Prerequesites

Due to [#978](https://github.com/microsoft/vscode-chrome-debug/issues/978) and [#289](https://github.com/microsoft/vscode-js-debug/issues/289) the [javascript debugger (nightly)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) plugin is needed. You shouldn't need the chrome debugger anymore.

Make sure in your settings you set `"debug.javascript.usePreview": true,`

### As of master:

- Chrome Works (v81.0.3945.130)
- Edge Works (v81.0.309.71)
- Debugger for Firefox: works (76.0b8)
- Server Side debugging works (Node v13.2.0)
- Node debugging via Docker works (Node v13.2.0)

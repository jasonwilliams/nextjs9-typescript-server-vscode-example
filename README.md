# nextjs9-typescript-server-vscode-example

This is example of next app using express, typescript and next, that can be debuged in vscode.

### Prerequesites

Due to [#978](https://github.com/microsoft/vscode-chrome-debug/issues/978) and [#289](https://github.com/microsoft/vscode-js-debug/issues/289) the [javascript debugger (nightly)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.js-debug-nightly) plugin is needed.

### As of master:

- Chrome Works (v79.0.3945.130)
- Edge Works (v79.0.309.71)
- Firefox debugger does not work due to these 2 issues:
- - https://github.com/zeit/next.js/issues/9471
- - https://github.com/firefox-devtools/vscode-firefox-debug/issues/177
- Server Side debugging works (Node v13.2.0)

# Contributing to Unotes

Thank you for taking time to make Unotes even better!

## Code of Conduct

Let's all get along and be nice. See the [Unotes Code of Conduct](https://github.com/ryanmcalister/unotes/blob/master/CODE_OF_CONDUCT.md).

## What you need to know

Unotes is a Visual Studio Code extension written in JavaScript. Unotes consists of 2 main projects:

- The Unotes Editor
- The Unotes Extension

### The Unotes Editor

This project wraps [tui-editor](https://github.com/nhn/tui.editor) in a React project. It needs to be built before the Unotes Extension Project. The code lives in the `editor/src` directory.

#### Installing

In the `editor`directory run...

```
npm install
```

#### Building

Make sure that a `build` directory exists in the `root` folder. In the `root` folder (not editor) run...

```
npm run build-editor
```

### The Unotes Extension Project

This is the root folder project. The extension code is in the `ext-src` folder. The extension provides the unotes tree view (UNotesProvider), several commands and settings, and a WebView (UNotesPanel).

#### Installing

In the root folder run...

```
npm install -g vsce
npm install
```

#### Building

First you must install and build the Unotes Editor (see above) and then run...

```
// to build in debug mode
npm run build
// you can now run it in VS Code by hitting F5

// to build in release mode
npm run pack
```

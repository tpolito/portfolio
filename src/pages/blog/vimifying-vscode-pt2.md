---
layout: ../../layouts/PostLayout.astro
title: 'Vimifying VS Code Part 2'
author: 'Tyler Polito'
date: '29 Feb 2023'
updated: '29 Mar 2022'
tag: 'Productivity'
draft: true 
---

I [wrote about](./vimifying-vscode.md) the process of making VSCode feel like vim last year. Since that post I had another fling with a custom [Neovim setup](https://github.com/tpolito/nvim-config) and have been splitting my time between both pretty evenly. I will typcially use VSCode at my day job due to some extension specific tooling that is incredibly nice to have, and keep my system close to that of my co-workers. However, I have almost exclusivly been using Neovim at home and on personal projects.

### Basics

Again almost all the basics can be taken care of with the [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim). This will give you the vim motions and other baseline features of Vim. However, its at this point two of the biggest painpoints arise. Without an escape hatch, you will find yourself in a position where you _have to_ use a mouse to refocus the edior. That is why this was one of the first things I added was this keybind. Addtionally for some reason by default `$` which should take you to the end of the current line, move you to the start of the next line. 

```json
// Refocus editor if vscode randomly moves me somewhere
{
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "key": "ctrl+shift+'",
      "command": "workbench.action.focusActiveEditorGroup",
      "when": "!editorTextFocus"
    }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    { "before": [ "$" ], "after": [ "g", "_" ] },
    { "before": [ "g", "_" ], "after": [ "$" ] }
  ]
}
```

This keybind will focus the currently open editor no matter what the currently focused element is. This is great for lots of situation, if you've focused a side panel or terminal. The next thing that took some figuring out was dealing with the built in file explorer. Luckily the [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) helps us out here again. By default you can use the normal movenet keys `j`, `key` and `enter` to navigate the explorer. The next problem we have to solve how to do the other actions we want. We already covered how to refocus the editor if we have finished our work in explorer. Here is how I configured adding, deleting, and focusing the file explorer. 

```json
// settings.json
{
  "before": ["<leader>", "e"],
  "commands": ["workbench.files.action.focusFilesExplorer"]
}
```

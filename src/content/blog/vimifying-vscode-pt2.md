---
draft: true
createdAt: 2023-02-29
updatedAt: 2023-02-29
title: Vimifying VS Code Part 2
category: tech
tag:
---

I [wrote about](./vimifying-vscode.md) the process of making VSCode feel like vim last year. Since that post I had another fling with a custom [Neovim setup](https://github.com/tpolito/nvim-config) and have been splitting my time between both pretty evenly. I will typcially use VSCode at my day job due to some extension specific tooling that is incredibly nice to have, and keep my system close to that of my co-workers. However, I have almost exclusivly been using Neovim at home and on personal projects.

## Basics

Again almost all the basics can be taken care of with the [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim). This will give you the vim motions and other baseline features of Vim. However, its at this point two of the biggest painpoints arise. Without an escape hatch, you will find yourself in a position where you _have to_ use a mouse to refocus the edior. That is why this was one of the first things I added was this keybind. Addtionally for some reason by default `$` which should take you to the end of the current line, move you to the start of the next line.

```json
// settings.json
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
		{ "before": ["$"], "after": ["g", "_"] },
		{ "before": ["g", "_"], "after": ["$"] }
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
// keybindings.json
 {
    "key": "a",
    "command": "explorer.newFile",
    "when": "explorerViewletVisible && filesExplorerFocus && !inputFocus"
  },
  {
    "key": "d",
    "command": "moveFileToTrash",
    "when": "explorerResourceMoveableToTrash && explorerViewletVisible && filesExplorerFocus && !explorerResourceReadonly && !inputFocus"
  }
```

Another bit of info regarding the file explorer between Linux/MacOS which was not intuitive to me, is that on Linux `Enter` will open the currently selected file, while on MacOS `Enter` will rename the file. On MacOS `Space` is the key that will open the file, but will not focus it. We'll have to use our handy focus hotkey for that.

## The terminal

I split my time pretty evently between having a dedicated terminal app for all my terminal needs and using the built in vscode terminal, as such my terminal related hotkeys are somewhat sparse, but could be easily expanded upon for someone who wanted a better VSCode terminal experience.

```json
// settings.json
  {
    "before": ["<leader>", "t"],
    "commands": ["workbench.action.terminal.toggleTerminal"]
  },
```

This will just focus the terminal or open an new one if one is not open. Again I'll use the focus editor keybind to escape the terminal when I'm ready too.

## Conclusion

My affair with Neovim is not over, but as far as replicating what I love about it inside VSCode I have reached a point where I am quite happy and productive.

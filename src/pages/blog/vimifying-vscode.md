---
layout: ../../layouts/PostLayout.astro
title: 'Vimifying VS Code'
author: 'Tyler Polito'
date: '29 Mar 2022'
updated: '29 Mar 2022'
tag: 'tech'
---

### Why not just use Vim?

I made the switch to Vim (specifically Neovim) last year and used it for around four months before wanting to move back to VS Code. This was for a few reasons:

1. I was spending _a lot_ of time maintaining and editing my `.vimrc` file. Which was eating into my dev time.
2. Maintaining settings across three different operating systems was tedious. Especially so when dealing with certain LSPs.

I know there are great solutions and workarounds for all of these, but at the end of the day, I didn't want to spend as much time as I was thinking about/tweaking my text editor. I wanted something that required less friction to set up and maintain. After some searching and messing with the wonderful [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) I finally landed on a setup that gave me all the features I loved about Vim, but with the added flexibility of VS Code.

### Replicating what I liked about Vim inside VS Code

To get started I installed the [vim extension](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) which immediately gave me much of the functionality I desired. I added some initial code to my `settings.json` to get started.

```json
"vim.leader": "'",
"vim.useSystemClipboard": true,
"vim.useCtrlKeys": false,
"vim.normalModeKeyBindingsNonRecursive": [],
```

Walking through this `vim.leader` is pretty straightforward, and just sets your leader key. `vim.useSystemClipboard` is also pretty straightforward, it allows the vim plugin to use your system's clipboard. I set `vim.useCtrlKeys` to false because I want to continue to use some common keyboard shortcuts with VS Code. Now `"vim.normalModeKeyBindingsNonRecursive": []` is not the most straightforward title, but it essentially allows us to bind VS Code shortcuts to vim commands. You can get a lot of functionality out of this setting.

Next, I need to find a way to incorporate everything I loved about Vim, into VS Code. The first of which was fuzzy finding, which I used the plugin [telescope](https://github.com/nvim-telescope/telescope.nvim) for when I was using NeoVim. This was pretty easy, VS Code has great fuzzy finding built-in by default, normally accessed by pressing `F1` or `ctrl+p`. I went into my VS Code `settings.json` and added this inside the `"vim.normalModeKeyBindingsNonRecursive": []` block.

```json
"vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "f"],
      "commands": ["workbench.action.quickOpen"]
    },
  ],
```

Now doing `leader + f` lets me open up the quick open menu, and I can fuzzy find to jump between and search for files quickly. Next, I add these additional lines.

```json
"vim.normalModeKeyBindingsNonRecursive": [
	...
    {
      "before": ["<leader>", "v"],
      "commands": ["workbench.action.toggleSidebarVisibility"]
    },
    {
      "before": ["<leader>", "V"],
      "commands": ["revealInExplorer"]
    },
    {
      "before": ["<leader>", "t"],
      "commands": ["workbench.action.terminal.toggleTerminal"]
    }
  ],
```

Let's walk through what these additions added:

1. `leader + v` - Opens and closes the sidebar.
2. `leader + V` - Reveals the current file in the sidebar file explorer. Allowing me to navigate files in the sidebar with my keyboard.
3. `leader + t` - Toggles the built-in terminal.

Now with these out of the way, we are 90% of the way to being **vimified**.

### Keyboard shortcuts

The final part to vimifying VS Code is going to be updating the various keyboard shortcuts to work better with vim and allowing VS Code to be more friendly to use with less use of the mouse.

Firstly I'll add these two shortcuts:

```json
{
    "key": "alt+l",
    "command": "workbench.action.nextEditor",
    "when": "editorTextFocus && vim.active && vim.mode != 'Insert'"
  },
  {
    "key": "alt+h",
    "command": "workbench.action.previousEditor",
    "when": "editorTextFocus && vim.active && vim.mode != 'Insert'"
  },
```

This lets me move from tab to tab quickly so long as I'm not in Insert mode. Next up I'll add these:

```json
{
    "key": "alt+j",
    "command": "editor.action.moveLinesDownAction",
    "when": "editorTextFocus && vim.active && vim.mode != 'Insert'"
  },
  {
    "key": "alt+k",
    "command": "editor.action.moveLinesUpAction",
    "when": "editorTextFocus && vim.active && vim.mode != 'Insert'"
  },
```

This replicates the `alt + down arrow/up arrow to move lines up and down quickly and easily.

### Wrapping up

Well that's it! That's the core of how I managed to scratch the vim itch while still using VS Code. I'll throw in a few extra tidbits here at the end:

1. `gd` - Go to definition. While in normal mode will go to the definition of whatever you hover.
2. `gh` - Will act as a mouseover in normal mode, allowing you to inspect errors or view type information.
3. `gi` - Go to implementation. Will navigate you to the implementation of a function or type.

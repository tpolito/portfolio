---
layout: ../../layouts/PostLayout.astro
title: 'Godot Tips & Tricks'
author: 'Tyler Polito'
date: '06 Jan 2022'
updated: '21 Feb 2022'
tag: 'tech'
---

The past few months I have been working on a new project built in Godot (more on that later). I have in that time spent quite a bit of time discovering and figuring out solutions to problems. This blog post will be a collection of useful tips, and I will keep these updated.

If I think any of the tips deserve their article I will break them out, and link to them here.

---

### Adding Godot to Path

To get started let me quickly walk through a fresh install Godot, then we can add it to our system variables.

You can install [Godot here](https://godotengine.org/download/windows). I recommend creating a folder in your home directory `C:\Users\USERNAME\Godot`. I have the regular `godot.exe` in the root of this directory, and then have a `GodotMono` folder with the mono executable renamed to `gmono.exe`.

> Note: You do not need to install the mono version if you plan on only using GDScript.

To add Godot to the system variables we need to access our systems _Environment Variables_. You can access these by searching "environment" in your search bar, which will open the "System Properties" window. Click on the "Environment Variables" button. Under "System variables", scroll down until you find "Path", and then double click to edit.
![](https://www.datocms-assets.com/60736/1641439097-env.png)
Here you will add the path to _each_ directory containing your Godot .exe's and then you will have successfully added Godot to Path. Restart any open terminal instances you open to applying the changes.

---

### Utilizing the command line

Godot has very powerful command-line integrations, which you can [read about here](https://docs.godotengine.org/en/stable/getting_started/editor/command_line_tutorial.html#command-line-reference). There are _a lot_ of things you can do with the command line. But one of the more powerful is combining command-line integrations with `bash` scripts. Here is a simple example of a script that will run two instances of the game at once.

```bash
start godot .
start godot .
```

Place that bash file in the same directory as your `project.godot` file, and when your run the script it will open two instances of your game at the same time. I have been working on a multiplayer game lately, and being able to debug netcode with two instances of the game has helped speed things up.

Here are some of the other commands I find use often and find useful.

- `godot --debug-collisions` - Will launch your game with collisions shapes shown.
- `godot --time-scale` - Speed or slow down the game. This can be useful for testing things quickly _or_ slowing the game down to see how certain interactions are happening.
- `godot -t` - Launch the game in "always on top" mode. Great for using the remote debugger while keeping the game visible at all times.

> Note! You can combine these flags, to make the most out of the command line.

### Removing the console from startup

There is an option to remove the console window from startup, hidden inside the "Editor Settings"
![](https://www.datocms-assets.com/60736/1641439106-godot_hide_console.png)

### Adding Type Hints

If you are a fan of strong typing, another helpful editor-level setting is _Type Hints_. Which can also be found in "Editor Settings". Enabling this setting will add useful type hints to your Godot functions
![](https://www.datocms-assets.com/60736/1641439083-godot_type_hints.png)

```
# With type hints
func _process(delta: float) -> void:
  pass
# Without type hints
func _process(delta):
  pass
```

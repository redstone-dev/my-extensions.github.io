# LEGEND
- `#com` : domain thingy | Example: github#**com**
- `!i()i!` : comment in aQJS\* | Example: `!i(HI)i!`
# About
This is a repository for a Tampermonkey userscript.
# How to get (aQJS 2 & higher)
use `%!!cdata[import($REPO(ME.G#io|com))cdata!!% !i(look at the LEGEND)!` or `$GRAB(injectFrom:%github + $GET_BROWSER_VERSION?switch + $INJECT?extension) <%!!cdata>{$INJECT(NPM?nil) $GLOBAL_COMPILE CS = {$COMPILER.new?name::aQcompiler}</cdata!!%>` or `$IMPORT(ex)&from:%github` or `$COMPILER?new#$COMPILER1?name[CoffeeCompile] >> CoffeCompile.compile(#$aQJS2\*)to(CS) !( \*Or higher (+) )!`
***
\*Single-line comment only. Multi-line comment: `!i{}i!`, Comment to leave out pieces of code: `!()!`.

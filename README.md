# button_detector.gs

> Detect mouse hover over scratch ui elements

This is a button detector library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is based on [the stdlib implementation](https://github.com/goboscript/std/), but it is designed to be used with [inflator](https://github.com/faretek1/inflator).

## Credits

- timmccool for costumes

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/button_detector`

add button_detector to your `inflator.toml` config:
```toml
[dependencies]
# ...
button_detector = "https://github.com/FAReTek1/button_detector"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/button_detector`
2. `cd button_detector`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`

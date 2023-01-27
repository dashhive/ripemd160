# @dashincubator/ripemd160

Fully browser-compatible `ripemd160` for JavaScript.

Works just like the other node crypto APIs.

## Install

**Browser**:

```html
<script src="https://unpkg.com/@dashincubator/ripemd160/ripemd160.js"></script>
```

```js
let RIPEMD160 = window.RIPEMD160;
```

**Node**:

```sh
npm install --save @dashincubator/ripemd160@2
```

```js
let RIPEMD160 = require("@dashincubator/ripemd160");
```

## Example

```js
let data = new Uint8Array([52, 50]);

let ripemd160 = RIPEMD160.create();
ripemd160.update(data);

let hash = ripemd160.digest();
console.log(hash);
// Uint8Array(20) [ 13, 240, ... 139, 200 ]
```

Uint8Array to Hex:

```js
let hex = hash.reduce(function (hex, byte) {
  return hex + byte.toString(16).padStart(2, "0");
}, "");

console.log(hex);
// "0df020ba32aa9b8b904471ff582ce6b579bf8bc8"
```

String to Uint8Array:

```js
let message = "42";
let utf8Encoder = new TextEncoder();
let data = utf8Encoder.encode(message);
```

## History

This fork is for the purpose of making the package `<script>`-tag compatible for
plain, old browser JavaScript (but not incompatible with node or bundlers)

- Fork of https://github.com/rvagg/ripemd160
  - Adds TypeScript types exports
  - Operates natively on `Uint8Array`s ONLY
    - (use `new TextEncoder().encode(str)` encode strings to `Uint8Array`s
  - Has no dependencies, even in the browser (i.e. no `Buffer`, no
    `TextEncoder`)
  - Does not handle streaming operations (i.e. just use `update()` and
    `digest()`)
  - Forked from https://github.com/crypto-browserify/ripemd160
    - Forked from https://github.com/crypto-browserify/hash-base)

## License & Copyright

MIT

Copyright (c) 2022 AJ ONeal & Dash Incubator \
Copyright (c) 2022 Rod Vagg \
Copyright (c) 2016 crypto-browserify

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
let hash = RIPEMD160.create();
hash.update("42");

let hex = hash.digest("hex");
console.log(hex);
// "0df020ba32aa9b8b904471ff582ce6b579bf8bc8"
```

## History

This fork is for the purpose of making the package `<script>`-tag compatible for
plain, old browser JavaScript (but not incompatible with node or bundlers)

- Fork of https://github.com/rvagg/ripemd160
  - Adds TypeScript types exports
  - Operates natively on `Uint8Array`s
  - Has no dependencies, even in the browser (i.e. no `Buffer`)
  - Does not handle streaming operations (i.e. just use `update()` and
    `digest()`)
  - Forked from https://github.com/crypto-browserify/ripemd160
    - Forked from https://github.com/crypto-browserify/hash-base)

## License & Copyright

MIT

Copyright (c) 2022 AJ ONeal & Dash Incubator \
Copyright (c) 2022 Rod Vagg \
Copyright (c) 2016 crypto-browserify

"use strict";

/** @type {{input:string, ripemd160:string}[]} */
// @ts-ignore
const vectors = require("hash-test-vectors");
const { base64 } = require("multiformats/bases/base64");
const RIPEMD160 = require("../");

function toHex(digest) {
  return digest.reduce(function (hex, byte) {
    return hex + byte.toString(16).padStart(2, "0");
  }, "");
}

function strictEqual(i, expected, actual) {
  if (actual === expected) {
    return;
  }

  throw new Error(`${i}: '${actual}' (actual) !== '${expected}' (expected)`);
}

vectors.forEach((vector, i) => {
  const input = base64.baseDecode(vector.input);

  it("vector #" + (i + 1) + "", () => {
    let data;
    if ("string" === typeof input) {
      data = new TextEncoder().encode(input);
    } else {
      data = input;
    }

    let digest = RIPEMD160.create().update(input).digest();
    let hex = toHex(digest);

    strictEqual(i, vector.ripemd160, hex);
  });
});

it("42", () => {
  let input = new Uint8Array([52, 50]);
  let digest = RIPEMD160.create().update(input).digest();
  let hex = toHex(digest);
  strictEqual('#', "0df020ba32aa9b8b904471ff582ce6b579bf8bc8", hex);
});

function it(msg, fn) {
  fn();
  console.info("✅", msg);
}

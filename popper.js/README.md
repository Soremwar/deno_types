## Popper.js
[![npm version](https://img.shields.io/npm/v/popper.js?style=flat)](https://www.npmjs.com/package/popper.js)

A library used to position poppers in web applications

### Usage Examples

```typescript
// @deno-types="https://denopkg.com/soremwar/deno_types/popper.js/v1.16.1/popper.js.d.ts"
import Popper from "https://cdn.skypack.dev/popper.js@v1.16.1";
```

### Notes:

In order to run this library you need to provide the DOM library to Deno
Do it following the examples in the [Deno manual](https://deno.land/manual/getting_started/typescript#custom-typescript-compiler-options)

Configure your file including the following options:
```
{
  "compilerOptions": {
    "lib": ["DOM", "ESNext", "deno.ns"]
  }
}
```

#### Tests:

- [x] Add import test

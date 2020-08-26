## JSS

[![npm version](https://img.shields.io/npm/v/jss?style=flat)](https://www.npmjs.com/package/jss)

A lib for generating Style Sheets with JavaScript.

### Usage Examples

```typescript
// @deno-types="https://denopkg.com/soremwar/deno_types/jss/v10.4.0/jss.d.ts"
import jss from "https://cdn.skypack.dev/jss@v10.4.0";
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
- [x] Add functionality test
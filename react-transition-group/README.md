## React Transition Group
[![npm version](https://img.shields.io/npm/v/react-transition-group?style=flat)](https://www.npmjs.com/package/react-transition-group)

A library used to position poppers in web applications

### Usage Examples

```typescript
// @deno-types="https://denopkg.com/soremwar/deno_types/react-transition-group/v4.4.1/react-transition-group.d.ts"
import * as react_transition_group from "https://cdn.skypack.dev/react-transition-group@v4.4.1";
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
- [ ] Add transition test
- [ ] Add css transition test
- [ ] Add switch transition test
- [ ] Add transition group test

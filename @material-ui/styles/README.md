## @material-ui/styles
[![npm version](https://img.shields.io/npm/v/@material-ui/styles?style=flat)](https://www.npmjs.com/package/@material-ui/styles)

Providing a strong foundation for building dynamic UIs

### Usage Examples

```typescript
// @deno-types="https://denopkg.com/soremwar/deno_types/@material-ui/styles/v4.9.10/styles.d.ts"
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";

console.log(styles.makeStyles)
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
- [x] Add makeStyles functionality test
- [ ] Add withStyles functionality test
Types for Facebook's React DOM library.

[![npm version](https://img.shields.io/npm/v/react-dom.svg?style=flat)](https://www.npmjs.com/package/react-dom)

This package serves as the entry point to the DOM and server renderers for
Facebook's React library.

### Usage Examples

```typescript
// @deno-types="https://deno.land/x/types/react-dom/v16.13.1/react-dom.d.ts"
import ReactDOM from "https://cdn.pika.dev/react-dom@16.13.1";
```

```typescript
// @deno-types="https://deno.land/x/types/react-dom/v16.9.0/server.d.ts"
import ReactDomServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";
```

#### Notes:

React Dom tests were removed to be implemented later in a full test suit that
covers all cases

React Dom Server is partially implemented due to current incompatibility with
Node's Readable Streams.

PIKA.DEV does **not** provide an importable build of ReactDomServer. Fallback
on JSMP.IO for using it.

Non supported functions:

1. renderToNodeStream
1. renderToStaticNodeStream

TODO

- [ ] Add tests for ReactDom
- [x] Add tests for ReactDomServer
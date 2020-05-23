Types for Reactive Extensions' RxJS library.

[![npm version](https://badge.fury.io/js/rxjs.svg)](http://badge.fury.io/js/rxjs)

RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.

### Usage Examples

```typescript
// @deno-types="https://deno.land/x/types/rxjs/v6.5.5/rxjs.d.ts"
import rxjs, { range } from "https://cdn.pika.dev/rxjs@6.5.5";

// @deno-types="https://deno.land/x/types/rxjs/v6.5.5/operators.d.ts"
import operators from 'https://dev.jspm.io/rxjs@6.5.5/operators';

```

#### Notes
- Dont try destructuring in import when using JSPM.IO, since everything is exported in the default namespace in most cases

  Instead try this
  ```typescript
  import operators from 'https://dev.jspm.io/rxjs@6.5.5/operators';
  const { throttleTime } = operators;
  ```

### TODO
- [ ] Add detailed tests for RxJS utilities (operators, etc...)
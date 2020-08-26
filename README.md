# NPM compatibility list and declaration files for Deno

This repository hosts a list of NPM libraries compatible with Deno as well as
their definition files to interoperate with TypeScript inside the Deno compiler.

Because Deno only resolves fully qualified file names, type definitions that
import other type definitions might not work with Deno. Also, when some type
definition supply some global interfaces, they can conflict with Deno. The types
located here have been validated to work with Deno.

## Available libraries

- JSS
- PropTypes
- React
- React Linked State Mixin
- ReactDOM
- RxJS

## Using the library

There are several ways these type definitions can be referenced. Likely the
"best" way is that the CDN provider provides a header of `X-TypeScript-Types`
which points to the type definitions. We are working to have this available, but
currently you would need to use the compiler hint of `@deno-types`. For example
to import React:

```typescript
// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React from "https://cdn.pika.dev/react@16.13.1";
```

or

```typescript
// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React from "https://dev.jspm.io/react@16.13.1";
```

#### Notes:

JSPM transformation of most libraries export everything through the default
namespace, so most of the time it might not be suited to work along with this
definition library.

## Contributing

Feel free to open an issue about a module you would like to see in this library.
If you would like to add a package to this list, open a pull request and I'll
review it as fast as possible.

### Structure

All the libraries added must follow the following structure

```
.
├── ...
├── module_name                             # Original library name
│   ├── version                             # Specific version of the file, must follow 'v' convention Ex: v1.0.0, v.2.3.1
│       ├── definition_file.ts              # File with the definitions for the library. The library can contain as many of these as needed
│       ├── tests                           # Folder containing tests for the library
│           ├── definition_file_test.ts     # The definitions in this file should map to the main entrypoint of the library. The tests should use the Deno test library
└── ...
```

### Testing

If the test files follow the test pattern they should be picked by deno test

To run the test suite simply run the following command (Deno v1.3+)

```
deno test -c tsconfig.json
```

// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// @deno-types="../react.d.ts"
import React from "./react_mock.js";
import { assertEquals } from "../../../test_deps.ts";

Deno.test({
  name: "React definitions",
  fn() {
    class Component {
      render() {
        return <div></div>;
      }
    }

    assertEquals(
      new Component().render(),
      `{"type":"div","props":null,"children":[]}`,
    );
  },
});

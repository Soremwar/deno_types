// @deno-types="../react.d.ts"
import React from "./react_mock.js";
import { assertEquals } from "../../../test_deps.ts";

Deno.test({
  name: "React integration",
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

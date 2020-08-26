// @deno-types="../jss.d.ts"
import jss from "https://cdn.skypack.dev/jss@v10.4.0";
import {
  assertEquals,
} from "../../../test_deps.ts";

Deno.test(
  "JSS generates styles correctly",
  () => {
    const style = {
      myButton: {
        color: 'green'
      }
    };
    
    const sheet = jss.createStyleSheet(style);

    assertEquals(
      "myButton-0-0-1",
      sheet.classes.myButton,
    );
    
    assertEquals(
      ".myButton-0-0-1 { color: green; }".replaceAll(/\s+/g, " "),
      sheet.toString().replaceAll(/\s+/g, " "),
    );
  },
);
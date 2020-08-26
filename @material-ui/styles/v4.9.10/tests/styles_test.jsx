// @deno-types="../styles.d.ts"
import styles from "https://dev.jspm.io/@material-ui/styles@4.9.10";
// @deno-types="../../../../react/v16.13.1/react.d.ts"
import React from "https://cdn.skypack.dev/react";
// @deno-types="../../../../react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom@16.13.1/server.js";

Deno.test(
  "@material-ui/styles appends styles correctly",
  () => {
    const useStyles = styles.makeStyles({
      root: {
        color: 'red',
      },
    });
    
    const Test = () => {
      const classes = useStyles();
    
      return (
        <h1 className={classes.root}>This works!</h1>
      );
    }
    
    ReactDOMServer.renderToString(<Test/>);
  },
);
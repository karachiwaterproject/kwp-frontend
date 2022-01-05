import React from "react";
import ReactDOM from "react-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";
import App from "App";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

ReactDOM.render(<App />, document.getElementById("root"));

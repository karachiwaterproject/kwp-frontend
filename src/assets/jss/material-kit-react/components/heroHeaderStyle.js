import { container } from "assets/jss/material-kit-react.js";

const headerStyle = {
  container,

  main: {
    minHeight: "100vh",
    position: "relative",
    left: 0,
    width: "100%",
    overflow: "hidden",
  },
  vector: {
    position: "absolute",
    bottom: "0px",
    left: "0",
    width: "100%",
    zIndex: "2",
    fill: "white",
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    margin: "10px 0 0",
  },
};

export default headerStyle;

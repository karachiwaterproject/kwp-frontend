import { container, primaryColor } from "assets/jss/material-kit-react.js";

const footerStyle = {
  footer: {
    minHeight: "70vh",
    display: "flex",
    jusifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    paddingTop: "20%",
    paddingBottom: "50px",
    backgroundColor: "white",
    left: 0,
    width: "100%",
    overflow: "hidden",
  },
  vector: {
    position: "absolute",
    top: "0px",
    left: "0",
    width: "100%",
    zIndex: "2",
    fill: "#E5E5E5",
  },
  shapeWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  imageShape: {
    position: "absolute",
    width: "100%",
    display: "block",
  },
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    // position: "absolute",
    // top: "50%",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important",
  },
  icons: {
    border: "solid #555555 2px",
    borderRadius: "50%",
    padding: "5px",
    height: "45px",
    width: "45px",
    color: "#555555",

    "&:hover": {
      color: "black",
      border: "solid #000 2px",
    },
  },
  padding: {
    marginLeft: "12px",
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent",
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF",
    },
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px",
  },
};
export default footerStyle;

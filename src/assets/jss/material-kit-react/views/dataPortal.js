import { container } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
  },
  ...imagesStyle,
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  link: {
    textDecoration: "none",
  },
  textCenter: {
    textAlign: "center",
  },
  mainContainer: {
    padding: "50px 100px",
  },
  mainContainer2: {
    marginTop: "-40px",
    padding: "0px 100px",
  },
  formContainer: {
    margin: 10,
  },
  formFields: {
    margin: 10,
    width: "100%",
  },
  darkButton: {
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "grey",
    },
    float: "right",
  },
};

export default componentsStyle;

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
  pagination: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: "15px",
    position: "relative",
    borderRadius: "5px",
  },
  paginationLink: {
    padding: "8px 14px",
    borderRadius: "50%",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
    "&:active": {
      color: "white",
    },
  },
  paginationActiveLink: {
    border: "2px solid #fff",
    color: "white",
  },
  previous: {
    left: 30,
    position: "absolute",
    top: 6,
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    padding: "8px 16px",
    borderRadius: "50%",
  },
  next: {
    right: 30,
    position: "absolute",
    top: 6,
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    padding: "8px 16px",
    borderRadius: "50%",
  },
};

export default componentsStyle;

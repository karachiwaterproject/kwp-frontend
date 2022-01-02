import { container } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";

const componentsStyle = {
  card: {
    height: "300px",
    position: "relation",
  },
  //   cardMain: {
  //     position: "absolute",
  //     bottom: "0",
  //     width: "100px",
  //     height: "100px",
  //     right: "0",
  //     borderBottom: "10px solid #CFB381",
  //     borderRight: "10px solid #CFB381",
  //   },
  cardContent: {
    backgroundColor: "rgba(0, 0, 0)",
    color: "white",
    position: "absolute",
    bottom: 0,
    width: "70px",
    height: "70px",
    right: 0,
    boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
    borderBottom: "10px solid #CFB381",
    borderRight: "10px solid #CFB381",
  },
  icon: {
    position: "absolute",
    bottom: 13,
    right: 13,
    fontSize: "2rem",
  },
};

export default componentsStyle;

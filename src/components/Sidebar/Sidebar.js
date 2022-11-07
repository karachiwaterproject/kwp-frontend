import { Button } from "@material-ui/core";
import React from "react";
import "./sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";

const Sidebar = ({ children }) => {
  const [_width, setWidth] = React.useState("60px");
  const [buttonContent, setButtonContent] = React.useState("<");
  const [divStyle, setDivStyle] = React.useState("none");

  const toggleWidth = () => {
    _width === "60px" ? setWidth("600px") : setWidth("60px");
    _width === "60px" ? setButtonContent(">") : setButtonContent("<");
    _width === "60px" ? setDivStyle("flex") : setDivStyle("none");
  };

  return (
    <div className="sidebar" style={{ width: _width }}>
      <Button
        className="open"
        onClick={toggleWidth}
        variant="contained"
        color="primary"
      >
        {buttonContent}
      </Button>
      <div className="container" style={{ display: divStyle }}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

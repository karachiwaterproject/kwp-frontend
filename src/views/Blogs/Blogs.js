import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import React from "react";
import styles from "assets/jss/material-kit-react/views/homePage.js";
import { Container, makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import SocialTabs from "./Tabs";
import Footer from "components/Footer/Footer";
import FrontParallax from "components/Parallax/FrontParallax";
import Spinner from "Spinner";
import { enableScroll } from "App";

const useStyles = makeStyles(styles);

const Blogs = (props) => {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(true);
  const [height, setHeight] = React.useState(100);
  setTimeout(() => {
    enableScroll();
    setHeight(0);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, 3000);
  const { ...rest } = props;

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        {...rest}
      />
      {loading && <Spinner _height={`${height}vh`} />}

      <FrontParallax
        image={require("assets/img/blogging.webp").default}
        head="Blogs"
      ></FrontParallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer
            className={classes.mainContainer + " main-container"}
            style={{ padding: "50px 100px 0" }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              Blogs
            </Typography>
            <hr style={{ width: "100%" }} />
          </GridContainer>
          <GridContainer className={classes.mainContainer + " main-container2"}>
            <SocialTabs />
          </GridContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Blogs;

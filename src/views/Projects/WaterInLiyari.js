import { Container, makeStyles, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import { Link } from "react-router-dom";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/dataPortal.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";
import { OnGoingProjects } from "views/HomePage/OnGoingProjects/OnGoingProjects";
import { projects } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import FrontParallax from "components/Parallax/FrontParallax";
import { enableScroll } from "App";
import Spinner from "Spinner";

const useStyles = makeStyles(styles);

const WaterInLiyari = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  const [loading, setLoading] = React.useState(true);
  const [height, setHeight] = React.useState(100);
  setTimeout(() => {
    enableScroll();
    setHeight(0);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, 1000);
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
        image={require("assets/img/project/project4.webp").default}
        style={{ height: 400 }}
        head="Water In Lyari"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <br />
                <br />
                <h2 className={classes.title}>Water In Lyari</h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </FrontParallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer className={classes.mainContainer2 + " main-container"}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Water security through a political-ecological lens: A case study
              of Lyari Township
            </Typography>
            <Typography variant="body2">
              In traditional water resource management, studies to estimate the
              reliability of water supply tend to remain “apolitical”, i.e.,
              there is little to no mention of power asymmetries that create
              differential bargaining power in unequal societies.
              <br />
              <br />
              Water security requires not only ensuring water availability, but
              also ensuring citizens’ “access” to the water supply. In Karachi’s
              context, the myopic focus on increasing water supplies often fails
              to consider social inequalities that render large portions of the
              population water insecure. This study assesses water scarcity
              using a political-ecological lens, through a case study of Lyari,
              a low-income and multiethnic township situated at the tail-end of
              the city’s water supply infrastructure and suffering from acute
              water scarcity. By employing a mixed-methods approach, we combine
              household surveys (selected through purposive sampling),
              interviews with relevant stakeholders, and participant
              observations to investigate tangible and intangible factors that
              influence the households’ ability to purchase, access, and consume
              a safe and adequate volume of water for domestic purposes.
            </Typography>
          </GridContainer>
          <div className={classes.mainContainer + " main-container"}>
            <Typography
              variant="h4"
              className="h4"
              style={{ borderLeft: "4px #3977C9 solid", paddingLeft: "10px" }}
            >
              Ongoing
            </Typography>
            <Typography
              variant="h3"
              style={{
                color: "#3977C9",
                fontWeight: "bold",
                borderLeft: "4px #000 solid",
                paddingLeft: "10px",
              }}
            >
              Projects
            </Typography>
            <GridContainer>
              {projects.map(({ name, image, url }) => (
                <GridItem key={name} xs={12} sm={6} lg={4}>
                  <Link to={url}>
                    <OnGoingProjects name={name} image={image} />
                  </Link>
                </GridItem>
              ))}
            </GridContainer>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default WaterInLiyari;

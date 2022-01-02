import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/dataPortal.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);

const Dataportal = (props) => {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/data2.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Dashboard</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer className={classes.mainContainer} direction="column">
          <form>
            <GridContainer className={classes.formContainer} direction="column">
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                Login
              </Typography>
              <br />

              <GridItem className={classes.formFields}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
              </GridItem>
              <GridItem className={classes.formFields}>
                <TextField
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </GridItem>
              <GridItem className={classes.formFields}>
                <Button className={classes.darkButton}>Login</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Dataportal;

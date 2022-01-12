import {
  Button,
  CardContent,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import React from "react";
import Parallax from "components/Parallax/Parallax";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/dataPortal.js";
import classNames from "classnames";
import Footer from "components/Footer/Footer";
import Card from "components/Card/Card";

const useStyles = makeStyles(styles);

import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { CHANGE_NAV_ON_SCROLL } from "constrants";

const Dataportal = ({ login, isAuthenticated }) => {
  const classes = useStyles();
  // const { ...rest } = props;

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };

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
        // {...rest}
      />
      <Parallax image={require("assets/img/data.png").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <h1 className={classes.title}>Dashboard</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div style={{ padding: "50px 120px 0px" }}>
            <Typography
              variant="h3"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Overview
            </Typography>
            <hr style={{ width: "100%" }} />
          </div>
          <GridContainer
            className={"main-container"}
            style={{ padding: "0 120px 0" }}
            direction="row"
          >
            <GridItem xs={12} sm={6}>
              <Card style={{ borderLeft: "3px solid #004AAD" }}>
                <CardContent>
                  <Typography
                    color="primary"
                    style={{
                      textTransform: "uppercase",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Nodes registered
                  </Typography>
                  <Typography style={{ textTransform: "uppercase" }}>
                    101
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <Card style={{ borderLeft: "3px solid #1CC88A" }}>
                <CardContent>
                  <Typography
                    style={{
                      color: "#1CC88A",
                      textTransform: "uppercase",
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    Active Nodes
                  </Typography>
                  <Typography style={{ textTransform: "uppercase" }}>
                    101
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer
            className={" main-container"}
            direction="row"
            style={{ padding: "10px 100px 30px" }}
          >
            <GridItem xs={12} sm={12} lg={6} style={{ padding: 30 }}>
              <div
                style={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: "gray",
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} lg={6}>
              <Typography variant="body2">
                The data portal allows you to observe the summary of data
                received from our flowmeters installed all across the city. If
                you are a home-owner, you may log in to this portal with the
                credentials provided to you by the team. Following this login,
                you will be directed to your personalized dashboard, where you
                will see data collected from the node(s) installed in your home.{" "}
                <br />
                These are some of the stats from last month:
              </Typography>
              <br />
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  backgroundColor: "gray",
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer style={{ padding: "0 100px 50px" }}>
            <GridItem xs={12} sm={12} lg={12}>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                Login
              </Typography>
              <hr style={{ width: "100%" }} />
              <form
                style={{ width: "100%", marginTop: "50px" }}
                onSubmit={(e) => onSubmit(e)}
              >
                <GridContainer
                  className={classes.formContainer}
                  direction="column"
                  style={{ width: "50%", margin: "auto" }}
                >
                  <br />

                  <GridItem className={classes.formFields}>
                    <TextField
                      style={{ width: "100%" }}
                      id="username"
                      label="Username"
                      name="username"
                      variant="outlined"
                      value={username}
                      onChange={(e) => onChange(e)}
                    />
                  </GridItem>
                  <GridItem className={classes.formFields}>
                    <TextField
                      style={{ width: "100%" }}
                      id="password"
                      label="Password"
                      type="password"
                      name="password"
                      value={password}
                      variant="outlined"
                      onChange={(e) => onChange(e)}
                    />
                  </GridItem>
                  <GridItem className={classes.formFields}>
                    <input
                      type="submit"
                      className={
                        classes.darkButton +
                        " MuiButtonBase-root MuiButton-root MuiButton-text"
                      }
                      value="Login"
                    />
                  </GridItem>
                </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

Dataportal.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Dataportal);

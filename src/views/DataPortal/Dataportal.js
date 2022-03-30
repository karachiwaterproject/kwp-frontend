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
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles(styles);

import { login } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import { DateTimeComponent } from "views/Node/DateTimeComponent";

const Dataportal = ({ login, isAuthenticated, auth }) => {
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

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="dimWhite"
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
                <br />
                <br />
                <h2 className={classes.title}>Dashboard</h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main)} style={{ padding: 20 }}>
          <br />
          <br />
          <Container>
            <Typography
              variant="h3"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Overview
            </Typography>

            <hr style={{ width: "100%" }} />
          </Container>
          <GridContainer
            className={"main-container"}
            style={{ padding: "0 30px 0" }}
            xs
            direction="row"
          >
            {/* <GridItem xs={12} sm={6}>
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
                    Flowmeters registered
                  </Typography>
                  <Typography style={{ textTransform: "uppercase" }}>
                    18
                  </Typography>
                </CardContent>
              </Card>
            </GridItem> */}
            <GridItem xs={12}>
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
                    Active flowmeters
                  </Typography>
                  <Typography style={{ textTransform: "uppercase" }}>
                    6
                  </Typography>
                </CardContent>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer
            className={" main-container"}
            direction="row"
            style={{ padding: "0 30px 0" }}
          >
            <GridItem xs={12} sm={12} lg={7} style={{ padding: 30 }}>
              <div
                style={{
                  height: "40vh",
                  width: "100%",
                  background: `url(${require("assets/img/map.jpg").default})`,
                  backgroundSize: "cover",
                }}
              />
              <small>
                Spatial distribution of installed smart flowmeters across
                Karachi.
              </small>
            </GridItem>
            <GridItem xs={12} sm={12} lg={5}>
              <Typography variant="body2">
                The data portal allows you to observe the summary of data
                received from our flowmeters installed all across the city. If
                you are a home-owner, you may log in to this portal with the
                credentials provided to you by the team. Following this login,
                you will be directed to your personalized dashboard, where you
                will see data collected from the node(s) installed in your home.{" "}
                <br />
              </Typography>
              <br />
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  background: `url(${require("assets/img/graph.jpg").default})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </GridItem>
          </GridContainer>
          <br />
          <br />
          <GridContainer style={{ padding: "  0 30px 0px" }}>
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
                  style={{ width: "70%", margin: "auto" }}
                >
                  {auth.loginFailed && (
                    <Alert severity="error">
                      Oops ! Invalid username or password.
                    </Alert>
                  )}
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
                      style={{ float: "right" }}
                      type="submit"
                      className={
                        classes.darkButton +
                        " MuiButtonBase-root MuiButton-root MuiButton-text"
                      }
                      value="Login"
                    />
                    <Button
                      style={{ float: "right", marginRight: 10 }}
                      color="primary"
                      variant="contained"
                    >
                      <Typography
                        onClick={() => {
                          const url = "https://forms.gle/JLPGHAGcKhKKxzjH7";
                          window.open(url);
                        }}
                      >
                        JOIN US
                      </Typography>
                    </Button>
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
  auth: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(Dataportal);

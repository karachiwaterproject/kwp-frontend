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
import FrontParallax from "components/Parallax/FrontParallax";
import { HOST } from "constrants";
import axios from "axios";
import Spinner from "Spinner";
import { enableScroll } from "App";

const Dataportal = ({ login, isAuthenticated, auth }) => {
  const classes = useStyles();
  // const { ...rest } = props;

  const [count, setCount] = React.useState(0);

  const getCount = async () => {
    const data = await axios.get(`${HOST}/api/node-count`);
    return data["data"]["count"];
  };

  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  React.useEffect(async () => {
    let val = await getCount();
    setCount(val);
  }, [getCount]);

  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [loading, setLoading] = React.useState(true);
  const [height, setHeight] = React.useState(100);
  setTimeout(() => {
    enableScroll();
    setHeight(0);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, 3000);
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
        color="transparent"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        // {...rest}
      />
      {loading && <Spinner _height={`${height}vh`} />}

      <FrontParallax
        image={require("assets/img/data.webp").default}
        head="Dashboard"
      >
        {/* <div className={classes.container}>
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
        </div> */}
      </FrontParallax>
      <Container>
        <div className={classNames(classes.main)}>
          <div
            style={{ paddingLeft: 20, paddingRight: 20 }}
            className={classes.mainContainer2}
          >
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
              <GridItem xs={12}>
                <br />
                <Typography variant="body2">
                  The data portal allows you to observe the summary of data
                  received from our flowmeters installed all across the city. If
                  you are a home-owner, you may log in to this portal with the
                  credentials provided to you by the team. Following this login,
                  you will be directed to your personalized dashboard, where you
                  will see data collected from the node(s) installed in your
                  home. <br />
                </Typography>
                <br />
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
                    background: `url(${
                      require("assets/img/map.webp").default
                    })`,
                    boxShadow: "0rem 0rem 0.5rem 0.5rem  rgba(0,0,0,.15)",
                    backgroundSize: "cover",
                    marginBottom: 10,
                  }}
                />
                <small>
                  Spatial distribution of installed smart flowmeters across
                  Karachi.
                </small>
              </GridItem>
              <GridItem xs={12} sm={12} lg={5}>
                <Card style={{ borderLeft: "3px solid #004AAD" }}>
                  <CardContent>
                    <Typography
                      style={{
                        color: "#004AAD",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        fontWeight: "bold",
                      }}
                    >
                      Active flowmeters
                    </Typography>
                    <Typography style={{ textTransform: "uppercase" }}>
                      {count}
                    </Typography>
                  </CardContent>
                </Card>
                <br />
                <div
                  style={{
                    height: "250px",
                    width: "100%",
                    background: `url(${
                      require("assets/img/graph.webp").default
                    })`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    boxShadow: "0rem 0rem 0.5rem 0.5rem  rgba(0,0,0,.15)",
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
                    style={{ width: "100%", margin: "auto" }}
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
                      <GridContainer>
                        <GridItem xs={12} md={6}>
                          <input
                            style={{
                              float: "right",
                              width: "100%",
                              marginBottom: 10,
                            }}
                            type="submit"
                            className={
                              classes.darkButton +
                              " MuiButtonBase-root MuiButton-root MuiButton-text"
                            }
                            value="Login"
                          />
                        </GridItem>
                        <GridItem xs={12} md={6}>
                          <Button
                            style={{
                              float: "left",
                              width: "100%",
                            }}
                            color="primary"
                            variant="contained"
                            onClick={() => {
                              const url = "https://forms.gle/JLPGHAGcKhKKxzjH7";
                              window.open(url);
                            }}
                          >
                            <Typography>JOIN US</Typography>
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                </form>
              </GridItem>
            </GridContainer>
          </div>
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

import Header from "components/Header/Header";
import React from "react";

import styles from "assets/jss/material-kit-react/views/nodes.js";
import {
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Footer from "components/Footer/Footer";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import classNames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getNodes } from "../../actions/node";
import Card from "components/Card/Card";
import { Link } from "react-router-dom";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import { dashboardLinks } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import { loadUser } from "actions/auth";

const useStyles = makeStyles(styles);

const Nodes = ({
  getNodes,
  node: { nodes, loading },
  auth: { allowedNodes, admin, isStaff, role },
}) => {
  const classes = useStyles();

  const currentPage = "Node Cards";
  React.useEffect(() => {
    getNodes();
    loadUser();
  }, [getNodes, loadUser]);
  console.log(allowedNodes);
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        // {...rest}
      />
      <Parallax image={require("assets/img/data.webp").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <h2 className={classes.title}>Dashboard</h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main)}>
          <GridContainer
            className={classes.mainContainer + " main-container"}
            direction="column"
          >
            <DashboardHeader
              currentPage={
                dashboardLinks.filter(({ page }) => page === currentPage)[0]
              }
              dashboardLinks={
                role === "user"
                  ? dashboardLinks.filter(
                      ({ page }) => page !== "Readings" && page !== "Dashboard"
                    )
                  : role === "researcher" || role === "student_researcher"
                  ? dashboardLinks.filter(({ page }) => page !== "Dashboard")
                  : dashboardLinks.filter(({ page }) => page)
              }
            />
            <GridContainer>
              {!loading && nodes && role === "student_researcher" && (
                <GridContainer style={{ width: "100%" }}>
                  {!loading && nodes ? (
                    nodes
                      .filter((node) => allowedNodes.includes(node.slug))
                      .map(({ name, total_flow, count, status, slug, si }) => {
                        return (
                          <GridItem key={name} xs={12} sm={12} lg={12}>
                            <Link to={`/node/${slug}`}>
                              <Card
                                style={{
                                  borderLeft: "5px solid",
                                  borderColor:
                                    status === "active"
                                      ? "#1CC88A"
                                      : status === "inactive"
                                      ? "#E33775"
                                      : "#F6C23E",
                                }}
                              >
                                <CardContent>
                                  <Typography
                                    color="primary"
                                    style={{
                                      textTransform: "uppercase",
                                      fontSize: "13px",
                                      fontWeight: "bold",
                                      color:
                                        status === "active"
                                          ? "#1CC88A"
                                          : status === "inactive"
                                          ? "#E33775"
                                          : "#F6C23E",
                                    }}
                                  >
                                    {name}
                                  </Typography>
                                  <Typography
                                    style={{ textTransform: "uppercase" }}
                                  >
                                    <span style={{ fontWeight: "bold" }}>
                                      Total flow (L):
                                    </span>{" "}
                                    {total_flow}
                                  </Typography>
                                  <Typography
                                    style={{ textTransform: "uppercase" }}
                                  >
                                    <span style={{ fontWeight: "bold" }}>
                                      Data points collected:
                                    </span>{" "}
                                    {count}
                                  </Typography>
                                  <Typography
                                    style={{ textTransform: "uppercase" }}
                                  >
                                    <span style={{ fontWeight: "bold" }}>
                                      Status:
                                    </span>{" "}
                                    {status}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Link>
                          </GridItem>
                        );
                      })
                  ) : (
                    <>Loading...</>
                  )}
                </GridContainer>
              )}
            </GridContainer>
            <GridContainer>
              {!loading && nodes && role === "user" && (
                <GridContainer style={{ width: "100%" }}>
                  {!loading && nodes ? (
                    nodes
                      .filter((node) => allowedNodes.includes(node.slug))
                      .map(({ name, total_flow, count, status, slug, si }) => {
                        return (
                          <GridItem key={name} xs={12} sm={12} lg={12}>
                            <Link to={`/homenode/${slug}`}>
                              <Card
                                style={{
                                  borderLeft: "5px solid",
                                  borderColor:
                                    status === "active"
                                      ? "#1CC88A"
                                      : status === "inactive"
                                      ? "#E33775"
                                      : "#F6C23E",
                                }}
                              >
                                <CardContent>
                                  <Typography
                                    color="primary"
                                    style={{
                                      textTransform: "uppercase",
                                      fontSize: "13px",
                                      fontWeight: "bold",
                                      color:
                                        status === "active"
                                          ? "#1CC88A"
                                          : status === "inactive"
                                          ? "#E33775"
                                          : "#F6C23E",
                                    }}
                                  >
                                    {name}
                                  </Typography>
                                  <Typography
                                    style={{ textTransform: "uppercase" }}
                                  >
                                    <span style={{ fontWeight: "bold" }}>
                                      Total flow (L):
                                    </span>{" "}
                                    {total_flow}
                                  </Typography>
                                  <Typography
                                    style={{ textTransform: "uppercase" }}
                                  >
                                    <span style={{ fontWeight: "bold" }}>
                                      Data points collected:
                                    </span>{" "}
                                    {count}
                                  </Typography>
                                  <Typography
                                    style={{ textTransform: "uppercase" }}
                                  >
                                    <span style={{ fontWeight: "bold" }}>
                                      Status:
                                    </span>{" "}
                                    {status}
                                  </Typography>
                                </CardContent>
                              </Card>
                            </Link>
                          </GridItem>
                        );
                      })
                  ) : (
                    <>Loading...</>
                  )}
                </GridContainer>
              )}
            </GridContainer>
            <GridContainer>
              {!loading &&
                nodes &&
                (role === "admin" || role === "researcher") && (
                  <GridItem>
                    <h4 style={{ fontWeight: "bolder" }}>Installed Nodes</h4>
                    <hr />
                    <GridContainer>
                      {!loading && nodes ? (
                        nodes
                          .filter(
                            (node) =>
                              !node.name.includes("test") &&
                              !node.name.includes("TEST") &&
                              !node.name.includes("Test") &&
                              node.name !== "LAB TESTBENCH 01" &&
                              !node.name.includes("AR_TEST")
                          )
                          .map(
                            ({ name, total_flow, count, status, slug, si }) => {
                              return (
                                <GridItem key={name} xs={12} sm={12} lg={4}>
                                  <Link to={`/node/${slug}`}>
                                    <Card
                                      style={{
                                        borderLeft: "5px solid",
                                        borderColor:
                                          status === "active"
                                            ? "#1CC88A"
                                            : status === "inactive"
                                            ? "#E33775"
                                            : "#F6C23E",
                                      }}
                                    >
                                      <CardContent>
                                        <Typography
                                          color="primary"
                                          style={{
                                            textTransform: "uppercase",
                                            fontSize: "13px",
                                            fontWeight: "bold",
                                            color:
                                              status === "active"
                                                ? "#1CC88A"
                                                : status === "inactive"
                                                ? "#E33775"
                                                : "#F6C23E",
                                          }}
                                        >
                                          {name}
                                        </Typography>
                                        <Typography
                                          style={{ textTransform: "uppercase" }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            Total flow (L):
                                          </span>{" "}
                                          {total_flow}
                                        </Typography>
                                        <Typography
                                          style={{ textTransform: "uppercase" }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            Data points collected:
                                          </span>{" "}
                                          {count}
                                        </Typography>
                                        <Typography
                                          style={{ textTransform: "uppercase" }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            Status:
                                          </span>{" "}
                                          {status}
                                        </Typography>
                                      </CardContent>
                                    </Card>
                                  </Link>
                                </GridItem>
                              );
                            }
                          )
                      ) : (
                        <>Loading...</>
                      )}
                    </GridContainer>
                  </GridItem>
                )}
            </GridContainer>
            <GridContainer>
              {!loading &&
                nodes &&
                (role === "admin" || role === "researcher") && (
                  <GridItem>
                    <h4 style={{ fontWeight: "bolder" }}>Test Nodes</h4>
                    <hr />
                    <GridContainer>
                      {!loading && nodes ? (
                        nodes
                          .filter(
                            (node) =>
                              node.name.includes("test") ||
                              node.name.includes("TEST") ||
                              node.name.includes("Test") ||
                              node.name === "LAB TESTBENCH 01" ||
                              node.name.includes("AR_TEST")
                          )
                          .map(
                            ({
                              name,
                              total_flow,
                              count,
                              status,
                              slug,
                              key,
                            }) => {
                              return (
                                <GridItem key={name} xs={12} sm={12} lg={4}>
                                  <Link to={`/node/${slug}`}>
                                    <Card
                                      style={{
                                        borderLeft: "5px solid",
                                        borderColor:
                                          status === "active"
                                            ? "#1CC88A"
                                            : status === "inactive"
                                            ? "#E33775"
                                            : "#F6C23E",
                                      }}
                                    >
                                      <CardContent>
                                        <Typography
                                          color="primary"
                                          style={{
                                            textTransform: "uppercase",
                                            fontSize: "13px",
                                            fontWeight: "bold",
                                            color:
                                              status === "active"
                                                ? "#1CC88A"
                                                : status === "inactive"
                                                ? "#E33775"
                                                : "#F6C23E",
                                          }}
                                        >
                                          {name}
                                        </Typography>
                                        <Typography
                                          style={{ textTransform: "uppercase" }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            Total flow (L):
                                          </span>{" "}
                                          {total_flow}
                                        </Typography>
                                        <Typography
                                          style={{ textTransform: "uppercase" }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            Data points collected:
                                          </span>{" "}
                                          {count}
                                        </Typography>
                                        <Typography
                                          style={{ textTransform: "uppercase" }}
                                        >
                                          <span style={{ fontWeight: "bold" }}>
                                            Status:
                                          </span>{" "}
                                          {status}
                                        </Typography>
                                      </CardContent>
                                    </Card>
                                  </Link>
                                </GridItem>
                              );
                            }
                          )
                      ) : (
                        <>Loading...</>
                      )}
                    </GridContainer>
                  </GridItem>
                )}
            </GridContainer>
          </GridContainer>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

Nodes.propTypes = {
  getNodes: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
  auth: state.auth,
});

export default connect(mapStateToProps, { getNodes, loadUser })(Nodes);

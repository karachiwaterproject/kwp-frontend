import Header from "components/Header/Header";
import React from "react";

import styles from "assets/jss/material-kit-react/views/dashboard.js";
import { CardContent, makeStyles, Typography } from "@material-ui/core";
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

const useStyles = makeStyles(styles);

const Dashboard = ({ getNodes, node: { nodes, loading } }) => {
  const classes = useStyles();
  React.useEffect(() => {
    getNodes();
  }, [getNodes]);

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
        // {...rest}
      />
      <Parallax image={require("assets/img/project/project1.jpg").default}>
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer
          className={classes.mainContainer + " main-container"}
          direction="column"
        >
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", marginBottom: 30 }}
          >
            Nodes
          </Typography>
          <hr style={{ width: "100%" }} />
          <GridContainer>
            {nodes.map(({ name, total_flow, count, status, key }) => {
              return (
                <GridItem key={name} xs={12} sm={12} lg={4}>
                  <Link to={`/node/${key}`}>
                    <Card
                      style={{
                        borderLeft: "5px solid",
                        borderColor:
                          status === "active"
                            ? "#1CC88A"
                            : status === "inactive"
                            ? "#F6C23E"
                            : "#E33775",
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
                                ? "#F6C23E"
                                : "#E33775",
                          }}
                        >
                          {name}
                        </Typography>
                        <Typography style={{ textTransform: "uppercase" }}>
                          <span style={{ fontWeight: "bold" }}>
                            Total flow (L):
                          </span>{" "}
                          {total_flow}
                        </Typography>
                        <Typography style={{ textTransform: "uppercase" }}>
                          <span style={{ fontWeight: "bold" }}>
                            Data points collected:
                          </span>{" "}
                          {count}
                        </Typography>
                        <Typography style={{ textTransform: "uppercase" }}>
                          <span style={{ fontWeight: "bold" }}>Status:</span>{" "}
                          {status}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </GridItem>
              );
            })}
          </GridContainer>
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

Dashboard.propTypes = {
  getNodes: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
});

export default connect(mapStateToProps, { getNodes })(Dashboard);

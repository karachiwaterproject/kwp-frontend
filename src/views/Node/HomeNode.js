import React from "react";
import { getNode } from "./../../actions/node";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/node.js";
import {
  CardContent,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "components/Card/Card";
import classNames from "classnames";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import { dashboardLinks } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";

const useStyles = makeStyles(styles);

const HomeNode = ({ match, getNode, node: { node, loading } }) => {
  const classes = useStyles();

  const currentPage = "HomeNode";

  React.useEffect(() => {
    getNode(match.params.slug);
    console.log(node);
  }, [getNode]);
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
      <Parallax image={require("assets/img/project/project1.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <h1 className={classes.title}>Node Details</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer
            style={{ padding: "30px 100px 0 100px" }}
            direction="column"
          >
            <h1>{!loading && node && node.name}</h1>
            <hr style={{ width: "100%" }} />
          </GridContainer>
          <GridContainer
            className={classes.mainContainer + " main-container"}
            direction="column"
          >
            <GridContainer>
              {!loading && node && (
                <GridItem key={node.key}>
                  <Card
                    style={{
                      borderLeft: "5px solid",
                      borderColor:
                        node.status === "active"
                          ? "#1CC88A"
                          : node.status === "inactive"
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
                            node.status === "active"
                              ? "#1CC88A"
                              : node.status === "inactive"
                              ? "#F6C23E"
                              : "#E33775",
                        }}
                      >
                        {match.params.slug}
                      </Typography>
                      <Typography style={{ textTransform: "uppercase" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Sample Rate :
                        </span>{" "}
                        {node.sample_rate}
                      </Typography>
                      <Typography style={{ textTransform: "uppercase" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Transmission size:
                        </span>{" "}
                        {node.transmission_size}
                      </Typography>
                      <Typography style={{ textTransform: "uppercase" }}>
                        <span style={{ fontWeight: "bold" }}>
                          Flow constant:
                        </span>{" "}
                        {node.flow_constant}
                      </Typography>
                      <Typography style={{ textTransform: "uppercase" }}>
                        <span style={{ fontWeight: "bold" }}>Status:</span>{" "}
                        {node.status}
                      </Typography>
                      <Typography style={{ textTransform: "uppercase" }}>
                        <span style={{ fontWeight: "bold" }}>Total Flow:</span>{" "}
                        {node.total_flow}
                      </Typography>
                    </CardContent>
                  </Card>
                </GridItem>
              )}
            </GridContainer>
          </GridContainer>
        </div>
      </Container>
    </div>
  );
};

HomeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getNode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
});

export default connect(mapStateToProps, { getNode })(HomeNode);

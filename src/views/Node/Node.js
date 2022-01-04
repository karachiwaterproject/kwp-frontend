import React from "react";
import { connect } from "react-redux";

import { getNode } from "./../../actions/node";
import { PropTypes } from "prop-types";
import Footer from "components/Footer/Footer";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/node.js";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Node = ({ getNode, match, node: { node, loading } }) => {
  const classes = useStyles();
  React.useEffect(() => {
    getNode(match.params.key);
  }, [getNode, match.params.key]);

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
                <h1 className={classes.title}>Node Details</h1>
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
          {!loading && node.name}
        </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

Node.propTypes = {
  getNode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
});

export default connect(mapStateToProps, { getNode })(Node);

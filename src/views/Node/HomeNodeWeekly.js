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
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from "components/Card/Card";
import classNames from "classnames";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import { dashboardLinks } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import Footer from "components/Footer/Footer";
import { getReadings, getReadingsWithTime } from "actions/readings";
import { LineChart } from "./Charts/LineChart";

const useStyles = makeStyles(styles);

const HomeNodeWeekly = ({
  getReadingsWithTime,
  match,
  getNode,
  node: { node, loading },
  reading: { readings },
}) => {
  const classes = useStyles();

  const currentPage = "HomeNode";

  const [readingsData, setReadingsData] = React.useState({
    flow_rate: [],
    time_sampled: [],
  });

  React.useEffect(async () => {
    getNode(match.params.slug);

    var time1 = new Date();
    var time2 = new Date();
    const _time1 = time1.valueOf() / 1000;
    time2.setDate(time2.getDate() - 7);
    const _time2 = time2.valueOf() / 1000;
    // getReadingsWithTime(match.params.slug, _time2, _time1);
    if (readings) {
      const { data } = readings;

      let reading = {
        flow_rate: [],
        time_sampled: [],
      };

      data.map((item) =>
        Object.keys(reading).map((key) => reading[key].push(item[key]))
      );

      setReadingsData(reading);
    }
  }, [getNode, getReadings, match.params.slug, readings]);
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
      <Parallax image={require("assets/img/data.png").default}>
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
            // className={classes.mainContainer + " main-container"}
            style={{ padding: "30px 100px 10px 100px" }}
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
          <GridContainer
            style={{ padding: "0px 100px 100px 100px" }}
            direction="column"
          >
            <h1>{!loading && `Flow rate`}</h1>
            <hr style={{ width: "100%" }} />
            <br />
            <ButtonGroup
              variant="contained"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                boxShadow: "none",
              }}
              color="primary"
              aria-label="primary button group"
            >
              <Button
                variant="contained"
                onClick={() => {
                  console.log("dasd");
                  getReadingsData();
                }}
              >
                Get today's data
              </Button>
              <Button variant="outlined">Get this week's data</Button>
            </ButtonGroup>

            <>
              {" "}
              <LineChart
                labels={readingsData.time_sampled}
                data={readingsData.flow_rate}
                ymin={0}
                ymax={60}
                heading={`Flow Rate (L/min)`}
                min={0}
                max={60}
              />
            </>
          </GridContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

HomeNodeWeekly.propTypes = {
  node: PropTypes.object.isRequired,
  getNode: PropTypes.func.isRequired,
  getReadings: PropTypes.func.isRequired,
  reading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
  reading: state.reading,
});

export default connect(mapStateToProps, { getNode, getReadingsWithTime })(
  HomeNodeWeekly
);

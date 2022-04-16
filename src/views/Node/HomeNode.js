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
import Card from "components/Card/Card";
import classNames from "classnames";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import Footer from "components/Footer/Footer";
import { getReadingsWithTime } from "actions/readings";
import { LineChart } from "./Charts/LineChart";
import { getHourlyStats } from "actions/readings";
import { BarChart } from "./Charts/BarChart";

const useStyles = makeStyles(styles);

const HomeNode = ({
  getReadingsWithTime,
  // getHourlyStats,
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
  const startDate = new Date();
  const endDate = new Date();
  startDate.setHours(0, 0, 0, 0);

  const [weeklyData, setWeeklyData] = React.useState({
    xAxis: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    yAxis: [10, 20, 30, 20, 10, 20, 30],
  });

  React.useEffect(async () => {
    await getNode(match.params.slug);
    const readings = await getReadingsWithTime(
      match.params.slug,
      ~~(startDate.valueOf() / 1000),
      ~~(endDate.valueOf() / 1000)
    );
    // const result = await getHourlyStats(match.params.slug);
    if (readings) {
      const { data } = readings;
      const content = Array.from(data).reverse();

      let reading = {
        flow_rate: [],
        time_sampled: [],
      };

      content.map((item) =>
        Object.keys(reading).map((key) => reading[key].push(item[key]))
      );

      setReadingsData(reading);
    }
  }, [getNode, getReadingsWithTime, match.params.slug]);

  // console.log(readingsData);

  const [showGraph, setShowGraph] = React.useState(true);

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
                <h2 className={classes.title}>Node Details</h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Container>
        <div className={classNames(classes.main)}>
          {!loading ? (
            <>
              <GridContainer
                style={{ padding: "30px 50px 0 50px" }}
                direction="column"
              >
                <h2>{!loading && node && node.name}</h2>
                <hr style={{ width: "100%" }} />
              </GridContainer>
              <GridContainer
                // className={classes.mainContainer + " main-container"}
                style={{ padding: "30px 50px 10px 50px" }}
                direction="column"
              >
                <GridContainer>
                  {!loading && node && (
                    <>
                      <GridItem key={node.key} xs={12} md={6}>
                        <Card
                          style={{
                            borderLeft: "5px solid",
                            borderColor:
                              node.status === "active"
                                ? "#1CC88A"
                                : node.status === "inactive"
                                ? "#E33775"
                                : "#F6C23E",
                          }}
                        >
                          <CardContent>
                            <Typography
                              color="primary"
                              style={{
                                textTransform: "uppercase",
                                fontSize: "17px",
                                fontWeight: "bold",
                                color:
                                  node.status === "active"
                                    ? "#1CC88A"
                                    : node.status === "inactive"
                                    ? "#E33775"
                                    : "#F6C23E",
                              }}
                            >
                              Information
                            </Typography>
                            {/* <Typography style={{ textTransform: "uppercase" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Sample Rate :
                            </span>{" "}
                            {node.sample_rate}
                          </Typography> */}
                            {/* <Typography style={{ textTransform: "uppercase" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Transmission size:
                            </span>{" "}
                            {node.transmission_size}
                          </Typography> */}
                            {/* <Typography style={{ textTransform: "uppercase" }}>
                            <span style={{ fontWeight: "bold" }}>
                              Flow constant:
                            </span>{" "}
                            {node.flow_constant}
                          </Typography> */}
                            <Typography style={{ textTransform: "uppercase" }}>
                              <span style={{ fontWeight: "bold" }}>
                                Status:
                              </span>{" "}
                              {node.status}
                            </Typography>

                            {readings.data && (
                              <Typography
                                style={{ textTransform: "uppercase" }}
                              >
                                <span style={{ fontWeight: "bold" }}>
                                  Signal Strength:
                                </span>{" "}
                                {readings.data[0] ? (
                                  readings.data[0].signal_strength + " %"
                                ) : (
                                  <>Null</>
                                )}
                              </Typography>
                            )}
                            <Typography style={{ textTransform: "uppercase" }}>
                              <span style={{ fontWeight: "bold" }}>
                                <br />
                              </span>{" "}
                            </Typography>
                          </CardContent>
                        </Card>
                      </GridItem>
                      <GridItem key={node.key} xs={12} md={6}>
                        <Card
                          style={{
                            borderLeft: "5px solid",
                            borderColor:
                              node.status === "active"
                                ? "#1CC88A"
                                : node.status === "inactive"
                                ? "#E33775"
                                : "#F6C23E",
                          }}
                        >
                          <CardContent>
                            <Typography
                              color="primary"
                              style={{
                                textTransform: "uppercase",
                                fontSize: "17px",
                                fontWeight: "bold",
                                color:
                                  node.status === "active"
                                    ? "#1CC88A"
                                    : node.status === "inactive"
                                    ? "#E33775"
                                    : "#F6C23E",
                              }}
                            >
                              Total Flow
                            </Typography>
                            {/* <Typography style={{ textTransform: "uppercase" }}>
                           <span style={{ fontWeight: "bold" }}>
                             Sample Rate :
                           </span>{" "}
                           {node.sample_rate}
                         </Typography> */}
                            {/* <Typography style={{ textTransform: "uppercase" }}>
                           <span style={{ fontWeight: "bold" }}>
                             Transmission size:
                           </span>{" "}
                           {node.transmission_size}
                         </Typography> */}
                            {/* <Typography style={{ textTransform: "uppercase" }}>
                           <span style={{ fontWeight: "bold" }}>
                             Flow constant:
                           </span>{" "}
                           {node.flow_constant}
                         </Typography> */}
                            <Typography style={{ textTransform: "uppercase" }}>
                              <span style={{ fontWeight: "bold" }}>
                                Yesterday:
                              </span>{" "}
                              Null
                            </Typography>
                            <Typography style={{ textTransform: "uppercase" }}>
                              <span style={{ fontWeight: "bold" }}>Today:</span>{" "}
                              {node.total_flow} Liters
                            </Typography>

                            <Typography style={{ textTransform: "uppercase" }}>
                              <span style={{ fontWeight: "bold" }}>
                                Weekly Average:
                              </span>{" "}
                              Null
                            </Typography>
                          </CardContent>
                        </Card>
                      </GridItem>
                    </>
                  )}
                </GridContainer>
              </GridContainer>
              <GridContainer
                style={{ padding: "0px 50px 100px 50px", width: "100%" }}
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
                    color="primary"
                    onClick={() => {
                      setShowGraph(true);
                      getReadingsData();
                    }}
                  >
                    Today's Flow Rate
                  </Button>
                  {/* <Button variant="outlined">Get this week's data</Button> */}
                </ButtonGroup>
                {showGraph && (
                  <>
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.flow_rate}
                      heading={`Liters/minute`}
                      min={0}
                      xlabel={"dsad"}
                      max={60}
                    />
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
                      <Button variant="contained" color="primary">
                        Daily Total Flow
                      </Button>
                    </ButtonGroup>
                    <br />

                    <BarChart
                      style={{ width: "100%" }}
                      labels={weeklyData.xAxis}
                      count={weeklyData.yAxis}
                      heading={`Liters`}
                      max={Math.max(...weeklyData.yAxis) * 1.2}
                    />
                  </>
                )}
              </GridContainer>
            </>
          ) : (
            <>
              <GridContainer
                style={{ padding: "30px 50px 30px 50px" }}
                direction="column"
              >
                Loading...
              </GridContainer>
            </>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

HomeNode.propTypes = {
  node: PropTypes.object.isRequired,
  getNode: PropTypes.func.isRequired,
  getReadingsWithTime: PropTypes.func.isRequired,
  reading: PropTypes.object.isRequired,
  // getHourlyStats: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  node: state.node,
  reading: state.reading,
});

export default connect(mapStateToProps, {
  getNode,
  getReadingsWithTime,
  // getHourlyStats,
})(HomeNode);

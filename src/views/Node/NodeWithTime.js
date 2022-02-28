import React from "react";
import { connect } from "react-redux";

import { PropTypes } from "prop-types";
import Footer from "components/Footer/Footer";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import styles from "assets/jss/material-kit-react/views/node.js";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { getReadings, getReadingsWithTime } from "actions/readings";
import { GET_READINGS_AFTER } from "constrants";
import { LineChart } from "./Charts/LineChart";
import { getNode } from "actions/node";
import { Link } from "react-router-dom";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import DateTimePicker from "react-datetime-picker";

const useStyles = makeStyles(styles);

const NodeWithTime = ({
  getReadingsWithTime,
  match,
  reading: { readings, loading },
}) => {
  const classes = useStyles();
  const [readingsData, setReadingsData] = React.useState({
    battery_level: [],
    temperature: [],
    flow_rate: [],
    flow_count: [],
    total_flow: [],
    time_sampled: [],
  });

  const [time1, setTime1] = React.useState("");
  const [time2, setTime2] = React.useState("");

  React.useEffect(() => {
    getReadingsWithTime(
      match.params.slug,
      match.params.time1,
      match.params.time2
    );
    setInterval(() => {
      console.log("Data restored !!");
      getReadingsWithTime(
        match.params.slug,
        match.params.time1,
        match.params.time2
      );
    }, 50000);
  }, [match.params.key, getReadingsWithTime]);

  setInterval(() => {
    const { data } = readings;
    if (data) {
      let content = Array.from(data).reverse();

      let reading = {
        battery_level: [],
        temperature: [],
        flow_rate: [],
        flow_count: [],
        total_flow: [],
        time_sampled: [],
      };

      content.map((item) =>
        Object.keys(reading).map((key) => reading[key].push(item[key]))
      );


      setReadingsData(reading);
    }
  }, GET_READINGS_AFTER);

  // setTimeout(() => {
  //   if (!loading && node) {
  //     getReadings(match.params.key);

  //     }
  // }, GET_READINGS_AFTER);
  const getTimeDifference = (timesArray) => {
    // assuming array is latest to oldest
    var collect = [];
    for (var i = 1; i < timesArray.length; i++) {
      collect.push(timesArray[i] - timesArray[i - 1]);
    }
    return collect;
  };

  const updateData = () => {
    const _time1 = time1.valueOf() / 1000;
    const _time2 = time2.valueOf() / 1000;

    if (_time1 > _time2 && _time1 === _time2) {
      alert("error date");
    } else {
      if (_time1 !== NaN && _time2 !== NaN) {
        window.location.href = `/node/${match.params.key}/${match.params.slug}/${_time1}/${_time2}`;
      } else {
        alert("Please enter a valid date");
      }
    }
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
            className={classes.mainContainer + " main-container"}
            direction="column"
          >
            {!loading && readings.data ? (
              <>
                <GridContainer>
                  <GridItem>
                    <Typography variant="h4">
                      Visualizing data for node:{" "}
                      <span style={{ fontWeight: "bolder" }}>
                        {match.params.slug}
                      </span>
                    </Typography>
                  </GridItem>
                  <GridItem>
                    <Button
                      color="secondary"
                      style={{ float: "right" }}
                      variant="contained"
                    >
                      <Link
                        style={{ color: "white" }}
                        to={`/homenode/${match.params.key}/${match.params.slug}`}
                      >
                        Switch to Owner View
                      </Link>
                    </Button>
                  </GridItem>
                </GridContainer>

                <hr style={{ width: "100%" }} />
                <br />
                <GridContainer style={{ width: "80%", margin: "auto" }}>
                  <GridItem xs={4}>
                    From : <br />
                    <DateTimePicker onChange={setTime1} value={time1} />
                  </GridItem>

                  <GridItem xs={4}>
                    To :<br />
                    <DateTimePicker onChange={setTime2} value={time2} />
                  </GridItem>
                  <GridItem xs={3}>
                    <br />
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={() => updateData()}
                    >
                      Load Data
                    </Button>
                  </GridItem>
                </GridContainer>
                <br />
                {readingsData.time_sampled.length > 0 ? (
                  <>
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.battery_level}
                      ymin={0}
                      ymax={5}
                      heading={`Battery Level (Volts)`}
                      min={3.3}
                      max={4.5}
                    />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={getTimeDifference(readingsData.time_sampled)}
                      heading={`T2 - T1`}
                    />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.flow_count}
                      heading={`Flow Count`}
                    />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.total_flow}
                      heading={`Total Flow (L)`}
                    />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.flow_rate}
                      ymin={0}
                      ymax={60}
                      heading={`Flow Rate (L/min)`}
                      min={0}
                      max={60}
                    />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.temperature}
                      heading={`Temperature (C°)`}
                    />
                  </>
                ) : (
                  <>Loading</>
                )}
              </>
            ) : (
              <>Loading</>
            )}
          </GridContainer>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

NodeWithTime.propTypes = {
  reading: PropTypes.object.isRequired,
  getReadingsWithTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reading: state.reading,
});

export default connect(mapStateToProps, { getReadingsWithTime })(NodeWithTime);
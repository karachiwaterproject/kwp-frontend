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
import { BarChart } from "./Charts/BarChart";

const useStyles = makeStyles(styles);

const Node = ({ getReadings, match, reading: { readings, loading } }) => {
  const classes = useStyles();

  const [time1, setTime1] = React.useState("");
  const [readingsData, setReadingsData] = React.useState({
    battery_level: [],
    temperature: [],
    flow_rate: [],
    flow_count: [],
    total_flow: [],
    time_sampled: [],
    time_received: [],
  });
  const [occurrences, setOccurences] = React.useState({
    time: [],
    count: [],
  });

  const [time2, setTime2] = React.useState("");

  React.useEffect(async () => {
    await getReadings(match.params.slug);
    if (!loading && readings) {
      const { data } = readings;

      // console.log(data);

      let reading = {
        battery_level: [],
        temperature: [],
        flow_rate: [],
        flow_count: [],
        total_flow: [],
        time_sampled: [],
        time_received: [],
      };
      data.map((item) =>
        Object.keys(reading).map((key) => reading[key].push(item[key]))
      );

      const newTimeSampled = [];
      reading.time_sampled.forEach((time_sampled) => {
        newTimeSampled.push(time_sampled.toString().slice(0, -2));
      });
      const occurrences = newTimeSampled.reduce(function (acc, curr) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      }, {});

      let fixedTime = [];
      Object.keys(occurrences).forEach((time) => {
        let date = new Date(time * 1000);
        let fixedDate =
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate() +
          " " +
          date.getHours() +
          ":" +
          date.getMinutes() +
          ":" +
          date.getSeconds();
        fixedTime.push(fixedDate);
      });

      // console.log(occurrencesData);
      setReadingsData(reading);
      // console.log(readingsData);

      // console.log(reading.time_sampled.length, reading.time_received.length);
      let count = new Array(reading.time_sampled.length).fill(0);
      // console.log(count);
      const newTimeReceived = [];
      reading.time_received.forEach((time_received) => {
        newTimeReceived.push(time_received.toString().slice(0, -13));
      });
      const occurrencesTimeReceived = newTimeReceived.reduce(function (
        acc,
        curr
      ) {
        return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
      },
      {});

      // console.log(newTimeReceived, occurrencesTimeReceived);

      for (let property in occurrencesTimeReceived) {
        console.log(`${property}: ${occurrencesTimeReceived[property]}`);
        console.log(property in newTimeReceived);
        let index =
          newTimeReceived.indexOf(`${property}`) +
          occurrencesTimeReceived[property] -
          1;
        count[index] = occurrencesTimeReceived[property];
      }

      let occurrencesData = {
        count: count,
        time: fixedTime,
      };
      setOccurences(occurrencesData);
    }
  }, [getReadings, match.params.key, getReadingsWithTime, readings, loading]);

  // setInterval(() => {

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
        window.location.href = `/node/${match.params.slug}/${_time1}/${_time2}`;
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
        <div className={classNames(classes.main)}>
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
                {/* {readingsData.time_sampled.length > 0
                  ? fillData(readings)
                  : null} */}
                {!loading && readingsData.time_sampled.length > 0 ? (
                  <>
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
                      data={occurrences.count}
                      heading={`Data Readings Obtained`}
                    />
                    {/* <BarChart
                      style={{ height: "400px", width: "100%" }}
                      labels={occurrences.time}
                      count={occurrences.count}
                    /> */}
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

Node.propTypes = {
  getReadings: PropTypes.func.isRequired,
  reading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reading: state.reading,
});

export default connect(mapStateToProps, { getReadings })(Node);

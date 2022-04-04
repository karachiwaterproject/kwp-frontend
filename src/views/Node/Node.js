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
import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { getReadings, getReadingsWithTime } from "actions/readings";
import { GET_READINGS_AFTER } from "constrants";
import { LineChart } from "./Charts/LineChart";
import { LineChart2 } from "./Charts/LineChart2";
import { Link } from "react-router-dom";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import { ChevronLeft } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Node = ({
  getReadings,
  getReadingsWithTime,
  match,
  reading: { readings, loading },
}) => {
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
    signal_strength: [],
  });
  const [occurrences, setOccurences] = React.useState({
    time: [],
    count: [],
  });

  const [time2, setTime2] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [toggle, setToggle] = React.useState(true);

  const getData = async () => {
    console.log("triggered");
    let readings = await getReadingsWithTime(
      match.params.slug,
      startTime,
      endTime
    );
    console.log(readings);
    if (readings) {
      console.log("graphs updated");
      const { data } = readings;
      let content = Array.from(data).reverse();

      let reading = {
        battery_level: [],
        temperature: [],
        flow_rate: [],
        flow_count: [],
        total_flow: [],
        time_sampled: [],
        time_received: [],
        signal_strength: [],
      };
      content.map((item) =>
        Object.keys(reading).map((key) => reading[key].push(item[key]))
      );

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

      for (let property in occurrencesTimeReceived) {
        let index =
          newTimeReceived.indexOf(`${property}`) +
          occurrencesTimeReceived[property] -
          1;
        count[index] = occurrencesTimeReceived[property];
      }

      let occurrencesData = {
        count: count,
        time: newTimeReceived,
      };
      setOccurences(occurrencesData);
      setToggle(false);
    }
  };

  React.useEffect(() => {
    if (toggle) {
      getData();
    }
  }, [getReadings, getReadingsWithTime, match.params.key, readings]);

  const getTimeDifference = (timesArray) => {
    // assuming array is latest to oldest
    var collect = [];
    for (var i = 1; i < timesArray.length; i++) {
      collect.push(timesArray[i] - timesArray[i - 1]);
    }
    return collect;
  };

  const updateData = async () => {
    const __time1 = new Date(time1);
    const __time2 = new Date(time2);

    const _time1 = ~~(__time1.valueOf() / 1000);
    const _time2 = ~~(__time2.valueOf() / 1000);

    if (_time1 > _time2 && _time1 === _time2) {
      alert("error date");
    } else {
      if (_time1 !== NaN && _time2 !== NaN) {
        setToggle(true);
        setStartTime(_time1);
        setEndTime(_time2);
        getData();
      } else {
        alert("Please enter a valid date");
      }
    }
  };

  const fetchToday = async () => {
    const __time1 = ~~(new Date().valueOf() / 1000);
    let __time2 = new Date();
    __time2.setHours(0, 0, 0, 0);
    __time2 = ~~(__time2.valueOf() / 1000);

    let _time1 = new Date(__time1 * 1000);
    let offset = _time1.getTimezoneOffset();

    _time1 = new Date(_time1 - offset * 60 * 1000).toISOString();

    let _time2 = new Date(__time2 * 1000);
    offset = _time2.getTimezoneOffset();

    _time2 = new Date(_time2 - offset * 60 * 1000).toISOString();

    setTime1(_time2.slice(0, -1));
    setTime2(_time1.slice(0, -1));
  };

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
                <h2 className={classes.title}>Node Details</h2>
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
                    <div>
                      <Link to="/nodes" style={{ float: "left" }}>
                        <Button>
                          <ChevronLeft style={{ fontSize: "2.1rem" }} />
                        </Button>
                      </Link>

                      <Typography variant="h4" style={{ float: "left" }}>
                        Visualizing data for node:{" "}
                        <span style={{ fontWeight: "bolder" }}>
                          {match.params.slug}
                        </span>
                      </Typography>
                    </div>
                  </GridItem>
                  <GridItem>
                    <Button
                      color="secondary"
                      style={{ float: "right" }}
                      variant="contained"
                    >
                      <Link
                        style={{ color: "white" }}
                        to={`/homenode/${match.params.slug}`}
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
                    <TextField
                      id="datetime-local"
                      label="From"
                      type="datetime-local"
                      value={time1}
                      onChange={(e) => setTime1(e.target.value)}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </GridItem>

                  <GridItem xs={4}>
                    <TextField
                      id="datetime-local"
                      label="From"
                      type="datetime-local"
                      onChange={(e) => setTime2(e.target.value)}
                      value={time2}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </GridItem>
                  <GridItem
                    xs={4}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <br />
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={() => updateData()}
                    >
                      Load Data
                    </Button>
                    <Button
                      style={{ marginLeft: 5 }}
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={() => fetchToday()}
                    >
                      Todays Record
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
                    <LineChart2
                      labels={occurrences.time}
                      data={occurrences.count}
                      heading={`Data Readings Obtained`}
                    />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.signal_strength}
                      heading={`Signal Strength`}
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
  getReadingsWithTime: PropTypes.func.isRequired,
  reading: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reading: state.reading,
});

export default connect(mapStateToProps, { getReadings, getReadingsWithTime })(
  Node
);

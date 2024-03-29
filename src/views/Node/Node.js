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
  ButtonGroup,
  Container,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { getReadings, getReadingsWithTime } from "actions/readings";
import { LineChart } from "./Charts/LineChart";
import { LineChart2 } from "./Charts/LineChart2";
import { Link } from "react-router-dom";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import { ChevronLeft } from "@material-ui/icons";
import DateComponent from "./DateComponent";
import { LineChart3 } from "./Charts/LineChart3";

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

  const [isLoading, setIsLoading] = React.useState(false);

  const getData = async () => {
    // console.log("triggered");
    setIsLoading(true);
    let readings = await getReadingsWithTime(
      match.params.slug,
      startTime,
      endTime
    );
    // console.log(readings);
    if (readings) {
      // console.log("graphs updated");
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
      setReadingsData(reading);
      setOccurences(occurrencesData);
      setToggle(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, [5000]);
  };

  React.useEffect(() => {
    if (toggle) {
      getData();
    }
  }, [getReadings, getReadingsWithTime, match.params.key, readings]);

  // console.log(readingsData.battery_level);

  const getTimeDifference = (timesArray) => {
    // assuming array is latest to oldest
    var collect = [];
    for (var i = 1; i < timesArray.length; i++) {
      collect.push(timesArray[i] - timesArray[i - 1]);
    }
    return collect;
  };

  const startDate = React.useRef(null);
  const endDate = React.useRef(null);

  const updateData = async () => {
    // console.log();
    const __time1 = new Date(startDate.current.value);
    const __time2 = new Date(endDate.current.value);

    const _time1 = ~~(__time1.valueOf() / 1000);
    const _time2 = ~~(__time2.valueOf() / 1000);

    const diffTime = Math.abs(__time2 - __time1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (_time1 > _time2 && _time1 === _time2) {
      alert("error date");
    } else if (diffDays >= 3) {
      alert("Interval should be less than or equal to 3.");
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

  const fetchToday = () => {
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

    startDate.current.value = _time2.slice(0, -1);
    endDate.current.value = _time1.slice(0, -1);
    // setTime1(_time2.slice(0, -1));
    // setTime2(_time1.slice(0, -1));
  };

  const fetchYesterday = () => {
    let __time2 = new Date();
    __time2.setDate(__time2.getDate() - 1);
    __time2.setHours(0, 0, 0, 0);
    __time2 = ~~(__time2.valueOf() / 1000);

    let __time1 = new Date();
    __time1.setHours(0, 0, 0, 0);
    __time1 = ~~(__time1.valueOf() / 1000);

    let _time1 = new Date(__time1 * 1000);
    // __time1.setDate(__time1.getDate() - 1);
    let offset = _time1.getTimezoneOffset();

    _time1 = new Date(_time1 - offset * 60 * 1000).toISOString();

    let _time2 = new Date(__time2 * 1000);
    offset = _time2.getTimezoneOffset();

    _time2 = new Date(_time2 - offset * 60 * 1000).toISOString();

    startDate.current.value = _time2.slice(0, -1);
    endDate.current.value = _time1.slice(0, -1);
    // setTime1(_time2.slice(0, -1));
    // setTime2(_time1.slice(0, -1));
  };
  const [selectedValue, setSelectedValue] = React.useState("Custom");

  const [disableFields, setDistableFields] = React.useState(false);

  const handleChange = (event) => {
    console.log();
    setSelectedValue(event.target.value);
    if (event.target.value === "Custom") {
      setDistableFields(false);
    } else {
      if (event.target.value === "Today's Record") {
        fetchToday();
      } else if (event.target.value === "Yesterday's Record") {
        fetchYesterday();
      }
      setDistableFields(true);
    }
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
                  <GridItem xs={5}>
                    <TextField
                      id="datetime-local"
                      label="From"
                      type="datetime-local"
                      //   onMouseLeave={setTime}
                      //   onMouseLeave
                      //   className={classes.textField}
                      style={{ width: "100%" }}
                      disabled={disableFields}
                      inputRef={startDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    {/* <DateComponent
                      // time={time1}
                      // setTime={setTime1}
                    /> */}
                  </GridItem>

                  <GridItem xs={5}>
                    <TextField
                      id="datetime-local"
                      type="datetime-local"
                      label="To"
                      style={{ width: "100%" }}
                      //   onMouseLeave={setTime}
                      //   onMouseLeave
                      //   className={classes.textField}
                      inputRef={endDate}
                      disabled={disableFields}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    {/* <DateComponent time={time2} setTime={setTime2} /> */}
                  </GridItem>
                  <GridItem
                    xs={2}
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
                    {/* <Button
                      style={{ marginLeft: 5 }}
                      variant="contained"
                      color="secondary"
                      type="submit"
                      onClick={() => fetchToday()}
                    >
                      Todays Record
                    </Button> */}
                  </GridItem>
                </GridContainer>
                <GridContainer style={{ marginTop: 20 }}>
                  <GridItem
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="position"
                        name="position"
                        defaultValue="top"
                      >
                        <FormControlLabel
                          value="Today's Record"
                          control={
                            <Radio
                              checked={selectedValue === "Today's Record"}
                              onChange={handleChange}
                              value="Today's Record"
                              name="radio-button-demo"
                              inputProps={{ "aria-label": "Today's Record" }}
                            />
                          }
                          label="Today's Record"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="Yesterday's Record"
                          control={
                            <Radio
                              checked={selectedValue === "Yesterday's Record"}
                              onChange={handleChange}
                              value="Yesterday's Record"
                              name="radio-button-demo"
                              inputProps={{
                                "aria-label": "Yesterday's Record",
                              }}
                            />
                          }
                          label="Yesterday's Record"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="Custom"
                          control={
                            <Radio
                              checked={selectedValue === "Custom"}
                              onChange={handleChange}
                              value="Custom"
                              name="radio-button-demo"
                              inputProps={{ "aria-label": "Custom" }}
                            />
                          }
                          label="Custom"
                          labelPlacement="end"
                        />
                      </RadioGroup>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <br />
                {/* {readingsData.time_sampled.length > 0
                  ? fillData(readings)
                  : null} */}
                {(isLoading || loading) && (
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Loading graphs &nbsp;...
                    <br />
                    <br />
                  </div>
                )}
                {!loading &&
                !isLoading &&
                readingsData.time_sampled.length > 0 ? (
                  <>
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
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                        color="primary"
                      >
                        Raw Data
                      </Button>
                    </ButtonGroup>
                    <br />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.flow_count}
                      heading={`Number of pulse counts per sample time`}
                      ymin={0}
                      ymax={
                        ~~(Math.max(...readingsData.flow_count) * 1.2) || 0.1
                      }
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
                      <Button
                        variant="contained"
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                        color="primary"
                      >
                        Total Flow
                      </Button>
                    </ButtonGroup>
                    <br />
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.total_flow}
                      heading={`Liters`}
                      // ymin={0}
                      // ymax={~~(Math.max(...readingsData.total_flow) * 1.2)}
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
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {}}
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                      >
                        Flow Rate
                      </Button>
                    </ButtonGroup>
                    <br />
                    {/* {readingsData.temperature.filter(
                      (data) => data !== null && data
                    ).length > 0 ? ( */}
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.flow_rate}
                      heading={`Liters/minute`}
                      ymin={0}
                      ymax={
                        ~~(Math.max(...readingsData.flow_rate) * 1.2) || 0.1
                      }
                    />
                    {/* ) : (
                      <center>No data available </center>
                    )} */}
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
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                        color="primary"
                      >
                        Temperature
                      </Button>
                    </ButtonGroup>
                    <br />
                    {/* {readingsData.temperature.filter(
                      (data) => data !== null && data
                    ).length > 0 ? ( */}
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.temperature}
                      heading={`Centigrade °`}
                      ymin={0}
                      ymax={
                        ~~(Math.max(...readingsData.temperature) * 1.2) || 0.1
                      }
                    />
                    {/* ) : (
                      <center>No data available </center>
                    )} */}
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
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                        color="primary"
                      >
                        Battery Level
                      </Button>
                    </ButtonGroup>
                    <br />
                    {/* {readingsData.battery_level.filter((data) => data !== null)
                      .length > 0 ? ( */}
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.battery_level}
                      heading={`Volts`}
                      ymin={0}
                      // ymax={~~(Math.max(...readingsData.battery_level) * 1.2)}
                    />
                    {/* ) : (
                      <center>No data available </center>
                    )} */}
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
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                        color="primary"
                      >
                        Sample Time
                      </Button>
                    </ButtonGroup>
                    <br />

                    <LineChart
                      labels={readingsData.time_sampled}
                      data={getTimeDifference(readingsData.time_sampled)}
                      heading={`Seconds`}
                      ymin={0}
                      ymax={
                        ~~(
                          Math.max(
                            ...getTimeDifference(readingsData.time_sampled)
                          ) * 1.2
                        )
                      }
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
                      <Button
                        variant="contained"
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                        color="primary"
                      >
                        Transmission history
                      </Button>
                    </ButtonGroup>
                    <br />
                    {/* {occurrences.count.filter((data) => data !== null).length >
                    0 ? ( */}
                    <LineChart3
                      labels={occurrences.time}
                      data={occurrences.count}
                      heading={`Number of Samples`}
                      ymin={0}
                      ymax={~~(Math.max(...occurrences.count) * 1.2) || 0.1}
                    />
                    {/* ) : (
                      <center>No data available </center>
                    )} */}
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
                        disableFocusRipple
                        disableTouchRipple
                        disableElevation
                        style={{ cursor: "default", width: "200px" }}
                        color="primary"
                      >
                        Signal Strength
                      </Button>
                    </ButtonGroup>
                    <br />
                    {/* {readingsData.signal_strength.filter(
                      (data) => data !== null
                    ).length > 0 ? ( */}
                    <LineChart
                      labels={readingsData.time_sampled}
                      data={readingsData.signal_strength}
                      heading={`Percentage`}
                      ymin={0}
                      ymax={
                        ~~(
                          Math.max(...readingsData.signal_strength) * 1.2 || 0.1
                        )
                      }
                    />
                    {/* ) : (
                      <center>No data available </center>
                    )} */}
                    {/* <BarChart
                      style={{ height: "400px", width: "100%" }}
                      labels={occurrences.time}
                      count={occurrences.count}
                    /> */}
                  </>
                ) : (
                  <></>
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

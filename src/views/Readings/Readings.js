import {
  Button,
  Container,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import { dashboardLinks } from "constrants";
import React from "react";
import styles from "assets/jss/material-kit-react/views/readings.js";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import Footer from "components/Footer/Footer";

import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getNodes } from "../../actions/node";
import { getReadings } from "../../actions/readings";
import { DEFAULT_NODE } from "constrants";
import ReadingsPagination from "./ReadingsPagination/ReadingsPagination";
import { READINGS_PER_PAGE } from "constrants";
import { CHANGE_NAV_ON_SCROLL } from "constrants";
import { Link } from "react-router-dom";
import { HOST } from "constrants";
import { loadUser } from "actions/auth";

const useStyles = makeStyles(styles);

const Readings = ({
  match,
  reading,
  node,
  getNodes,
  getReadings,
  auth: { allowedNodes, role },
}) => {
  const classes = useStyles();

  const [nodeToFetch, setNodeToFetch] = React.useState(
    match.params.slug || DEFAULT_NODE
  );
  const [buttonText, setButtonText] = React.useState("Download CSV");
  const [buttonState, setButtonState] = React.useState(false);

  React.useEffect(() => {
    getNodes();
    loadUser();

    if (match.params.slug) getReadings(nodeToFetch);
  }, [getNodes, getReadings]);

  const currentPage = "Readings";

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
                <h2 className={classes.title}>Readings</h2>
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
            <GridContainer style={{ width: "100%", margin: 0, padding: 0 }}>
              {!node.loading && node.nodes && (
                <GridItem xs={12} sm={12}>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      if (nodeToFetch) {
                        window.location.href = `/readings/${nodeToFetch}`;
                      } else {
                        alert("Select node to fetch readings !");
                      }
                    }}
                  >
                    <FormControl
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "20px",
                        marginTop: "20px",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Node
                      </InputLabel>
                      <Select
                        style={{ width: "90%" }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={nodeToFetch}
                        onChange={(e) => setNodeToFetch(e.target.value)}
                      >
                        {node.nodes && role === "student_researcher"
                          ? node.nodes
                              .filter((node) =>
                                allowedNodes[0] !== "all"
                                  ? allowedNodes.includes(node.slug)
                                  : true
                              )
                              .map((node) => (
                                <MenuItem value={node.slug} key={node.slug}>
                                  {node.name}
                                </MenuItem>
                              ))
                          : node.nodes.map((node) => (
                              <MenuItem value={node.slug} key={node.slug}>
                                {node.name}
                              </MenuItem>
                            ))}
                      </Select>
                      <Button
                        style={{ width: "10%", marginLeft: "10px" }}
                        type="submit"
                        disabled={buttonState}
                        variant="contained"
                        color="primary"
                      >
                        Get
                      </Button>
                      <Button
                        style={{ width: "20%", marginLeft: "10px" }}
                        variant="contained"
                        disabled={buttonState}
                        color="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          let ans = confirm(
                            "It takes around 5 to 10 minutes to generate a CSV. Press OK to start the process."
                          );
                          if (ans) {
                            setButtonState(true);
                            setButtonText("Downloading");
                            fetch(`${HOST}/api/csv/${nodeToFetch}`)
                              .then((resp) => resp.blob())
                              .then((blob) => {
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement("a");
                                a.style.display = "none";
                                a.href = url;
                                a.download = `node${nodeToFetch}info.csv`;
                                document.body.appendChild(a);
                                a.click();
                                window.URL.revokeObjectURL(url);
                                setButtonText("Download CSV");
                                setButtonState(false);
                              })
                              .catch(() => {
                                alert("Please try again");
                                setButtonText("Download CSV");
                                setButtonState(false);
                              });
                          }
                        }}
                      >
                        {buttonText}
                      </Button>
                    </FormControl>
                  </form>
                </GridItem>
              )}

              <GridItem xs={12} sm={12} style={{ width: "100%" }}>
                {!reading.loading && reading.readings ? (
                  <ReadingsPagination
                    itemsPerPage={READINGS_PER_PAGE}
                    readings={reading.readings}
                  />
                ) : (
                  <>
                    {match.params.slug ? (
                      <center>Loading</center>
                    ) : (
                      <center>Please select a node to fetch readings</center>
                    )}
                  </>
                )}
              </GridItem>
            </GridContainer>
          </GridContainer>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

Readings.propTypes = {
  getNodes: PropTypes.func.isRequired,
  getReadings: PropTypes.func.isRequired,
  node: PropTypes.object.isRequired,
  reading: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reading: state.reading,
  node: state.node,
  auth: state.auth,
});
export default connect(mapStateToProps, { getNodes, getReadings, loadUser })(
  Readings
);

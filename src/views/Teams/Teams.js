import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Header from "components/Header/Header";
import Parallax from "components/Parallax/Parallax";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/team.js";
import HeaderLinks from "components/Header/HeaderLinks";
import classNames from "classnames";

import team1 from "./../../assets/img/team/1.jpg";
import TeamCard from "./TeamCard/TeamCard";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Footer from "components/Footer/Footer";

const useStyles = makeStyles(styles);
const teams = "./../../assets/img/team/";

const members = [
  {
    name: "Member 1",
    avatar: require("./../../assets/img/team/1.jpg").default,
    role: "details...",
    contact: "contant",
  },
  {
    name: "Member 2",
    avatar: require("./../../assets/img/team/1.jpg").default,
    details: "details...",
    role: "details...",
    contact: "contant",
  },
  {
    name: "Member 3",
    avatar: require("./../../assets/img/team/1.jpg").default,
    details: "details...",
    role: "details...",
    contact: "contant",
  },
  {
    name: "Member 4",
    avatar: require("./../../assets/img/team/1.jpg").default,
    details: "details...",
    role: "details...",
    contact: "contant",
  },
  {
    name: "Member 5",
    avatar: require("./../../assets/img/team/1.jpg").default,
    details: "details...",
    role: "details...",
    contact: "contant",
  },
];

const undergraduates = [
  {
    name: "Member 1",
    major: "major",
    year: "2021",
  },
  {
    name: "Member 2",
    major: "major",
    year: "2021",
  },
  {
    name: "Member 3",
    major: "major",
    year: "2021",
  },
  {
    name: "Member 4",
    major: "major",
    year: "2021",
  },
];

const Teams = (props) => {
  const classes = useStyles();

  const { ...rest } = props;
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
        {...rest}
      />
      <Parallax image={require("assets/img/team-banner.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Our Team</h1>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer className={classes.mainContainer}>
          {members.map(({ name, avatar, role, contact }) => (
            <GridItem xs={3} key={name}>
              <TeamCard
                name={name}
                avatar={avatar}
                role={role}
                contact={contact}
              />
            </GridItem>
          ))}
        </GridContainer>
        <GridContainer className={classes.mainContainer}>
          <Typography
            variant="h3"
            style={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            Undergraduate Researchers
          </Typography>
          <br />
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              aria-label="simple table"
              style={{ textAlign: "center" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Major</TableCell>
                  <TableCell align="center">Graduating year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {undergraduates.map(({ name, major, year }) => (
                  <TableRow key={name}>
                    <TableCell component="th" scope="row" align="center">
                      {name}
                    </TableCell>
                    <TableCell align="center">{major}</TableCell>
                    <TableCell align="center">{year}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </GridContainer>
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Teams;

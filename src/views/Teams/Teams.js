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
    name: "Dr. Hassaan Furqan Khan",
    role: "Co-Principal Investigator",
    avatar: require("./../../assets/img/team/1.jpg").default,
    details:
      "project leader | research interests: water systems analysis, water pricing",
    contact: "hassaan.khan@sse.habib.edu.pk",
  },
  {
    name: "Dr. Nausheen H. Anwar",
    role: "Co-Principal Investigator",
    avatar: require("./../../assets/img/team/2.jpg").default,
    details:
      "advisor, socioeconomic studies | research interests: city and regional planning, climate change, infrastructures, inequality",
    contact: "nhanwar@iba.edu.pk",
  },
  {
    name: "Junaid Ahmed Memon",
    role: "Co-Principal Investigator",
    avatar: require("./../../assets/img/team/3.jpg").default,
    details:
      "technical lead (smart flowmeter development) | research interests: systems design, fluid flow measurement, wireless sensor networks and internet of things",
    contact: "junaid.memon@sse.habib.edu.pk",
  },
  {
    name: "Sana Khalil",
    role: "Faculty Assistant",
    avatar: require("./../../assets/img/team/4.jpg").default,
    details:
      "lead, water pricing | research interests: labor economics, applied econometrics, development economics",
    contact: "sana.khalil@ahss.habib.edu.pk",
  },
  {
    name: "Dr. Moiz Anis",
    role: "Faculty Researcher",
    avatar: require("./../../assets/img/team/5.jpg").default,
    details:
      "advisor, iot | research interests: cellular networks, internet of things, computer networking, and wireless communications.",
    contact: "moiz.anis@sse.habib.edu.pk",
  },
  {
    name: "Abdul Rehman Soomro",
    role: "",
    avatar: require("./../../assets/img/team/6.jpg").default,
    role: "flowmeter hardware development | research interests: hydroinformatics, embedded systems, water metering",
    contact: "abdul.soomro@sse.habib.edu.pk",
  },
  {
    name: "Syed Ali Arshad",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/7.jpg").default,
    details:
      "lyari study | research interests: urban planning, climate change mitigation, ecological justice",
    contact: "ali.arshad@sse.habib.edu.pk",
  },
  {
    name: "Hiba Jamal",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/8.jpg").default,
    details:
      "full stack developer | research interests: computer vision, machine learning modelling",
    contact: "hiba.jamal@habib.edu.pk",
  },
];

const undergraduates = [
  {
    name: "Sarwan Shah",
    major: "Electrical Engineering",
    year: "2021",
  },
  {
    name: "Neha Khatri",
    major: "Social Development and Policy",
    year: "2021",
  },
  {
    name: "Aoun Hussain",
    major: "Electrical Engineering",
    year: "2021",
  },
  {
    name: "Ahsan Ali",
    major: "Electrical Engineering",
    year: "2022",
  },
  {
    name: "Daniyal Saeed",
    major: "Electrical Engineering",
    year: "2022",
  },
  {
    name: "Hunaina Khan",
    major: "Social Development and Policy",
    year: "2022",
  },
  {
    name: "Markhan Mushtaque",
    major: "Social Development and Policy",
    year: "2022",
  },
  {
    name: "Muhammad Hamza Raza",
    major: "Social Development and Policy",
    year: "2022",
  },
  {
    name: "Sara Intikhab",
    major: "Social Development and Policy",
    year: "2022",
  },
  {
    name: "Muhammad Ali Arif",
    major: "Electrical Engineering",
    year: "2023",
  },
  {
    name: "Muhammad Aqib Khan",
    major: "Electrical Engineering",
    year: "2023",
  },
  {
    name: "Yabudullah Ahmed Bakhtiar",
    major: "Electrical Engineering",
    year: "2023",
  },
  {
    name: "Asad Tariq",
    major: "Social Development and Policy",
    year: "2023",
  },
  {
    name: "Mohammad Hasan Tariq",
    major: "Social Development and Policy",
    year: "2023",
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
          {members.map(({ name, avatar, role, contact, details }) => (
            <GridItem xs={4} key={name}>
              <TeamCard
                name={name}
                avatar={avatar}
                role={role}
                contact={contact}
                details={details}
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

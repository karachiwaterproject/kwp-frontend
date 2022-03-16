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
  Container,
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
import { CHANGE_NAV_ON_SCROLL } from "constrants";

const useStyles = makeStyles(styles);
const teams = "./../../assets/img/team/";

const members = [
  {
    name: "Dr. Hassaan Furqan Khan",
    role: "Principal Investigator",
    avatar: require("./../../assets/img/team/1.jpg").default,
    details:
      "Project leader | research interests: water systems analysis, water pricing",
    contact: "hassaan.khan@sse.habib.edu.pk",
    status: true,
  },
  {
    name: "Dr. Nausheen H. Anwar",
    role: "Co-Principal Investigator",
    avatar: require("./../../assets/img/team/2.jpg").default,
    details:
      "Advisor, socioeconomic studies | research interests: city and regional planning, climate change, infrastructures, inequality",
    contact: "nhanwar@iba.edu.pk",
    status: true,
  },
  {
    name: "Junaid Ahmed Memon",
    role: "Co-Principal Investigator",
    avatar: require("./../../assets/img/team/3.jpg").default,
    details:
      "Technical lead (smart flowmeter development) | research interests: systems design, fluid flow measurement, wireless sensor networks and internet of things",
    contact: "junaid.memon@sse.habib.edu.pk",
    status: true,
  },
  {
    name: "Sana Khalil",
    role: "Faculty Assistant",
    avatar: require("./../../assets/img/team/4.jpg").default,
    details:
      "Lead, water pricing | research interests: labor economics, applied econometrics, development economics",
    contact: "sana.khalil@ahss.habib.edu.pk",
    status: false,
  },
  {
    name: "Dr. Moiz Anis",
    role: "Faculty Researcher",
    avatar: require("./../../assets/img/team/5.jpg").default,
    details:
      "Advisor, iot | research interests: cellular networks, internet of things, computer networking, and wireless communications.",
    contact: "moiz.anis@sse.habib.edu.pk",
    status: false,
  },
  {
    name: "Abdul Rehman Soomro",
    role: "",
    avatar: require("./../../assets/img/team/6.jpg").default,
    details:
      "Flowmeter hardware development | research interests: hydroinformatics, embedded systems, water metering",
    contact: "abdul.soomro@sse.habib.edu.pk",
    status: false,
  },
  {
    name: "Syed Ali Arshad",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/7.jpg").default,
    details:
      "Lyari study | research interests: urban planning, climate change mitigation, ecological justice",
    contact: "ali.arshad@sse.habib.edu.pk",
    status: true,
  },
  {
    name: "Hiba Jamal",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/8.jpg").default,
    details:
      "Full stack developer | research interests: computer vision, machine learning modelling",
    contact: "hiba.jamal@habib.edu.pk",
    status: false,
  },
  {
    name: "Abdul Samad",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/9.jpg").default,
    details:
      "Inventory control | research interests: water metering, surveys, electronic designing.",
    contact: "samad.shakir@sse.habib.edu.pk",
    status: true,
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
    major: "Computer Science ",
    year: "2023",
  },
  {
    name: "Mohammad Hasan Tariq",
    major: "Computer Engineeing",
    year: "2023",
  },
  {
    name: "Mohammad Jazzel Mehmood",
    major: "Computer Engineeing",
    year: "2024",
  },
  {
    name: "Zayaan Delawalla",
    major: "Social Development and Policy",
    year: "2023",
  },
  {
    name: "Fariha Batool",
    major: "Social Development and Policy",
    year: "2023",
  },
];
const activeMembers = members.filter((member) => member.status);
console.log(activeMembers);
const aluminiMembers = members.filter((member) => member.status === false);
console.log(aluminiMembers);

const Teams = (props) => {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="dimWhite"
        changeColorOnScroll={{
          height: CHANGE_NAV_ON_SCROLL,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/team-banner.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <br />
                <br />
                <h1 className={classes.title}>Our Team</h1>
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
            style={{ padding: "50px 100px 0" }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              Active Members
            </Typography>
            <hr style={{ width: "100%" }} />
          </GridContainer>
          <GridContainer
            // style={{ padding: "0 100px" }}
            className="padding"
          >
            {activeMembers.map(({ name, avatar, role, contact, details }) => (
              <GridItem xs={12} sm={6} md={6} lg={4} key={name}>
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
          <GridContainer
            className={classes.mainContainer + " main-container"}
            style={{ padding: "50px 100px 0" }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              Alumni
            </Typography>
            <hr style={{ width: "100%" }} />
          </GridContainer>

          <GridContainer className="padding">
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                aria-label="simple table"
                style={{ textAlign: "center" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {aluminiMembers.map(({ name, role, details }) => (
                    <TableRow key={name}>
                      <TableCell component="th" scope="row" align="left">
                        {name}
                      </TableCell>
                      <TableCell align="left">{details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </GridContainer>
          <GridContainer
            className={classes.mainContainer + " main-container"}
            style={{ padding: "50px 100px 0" }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", marginBottom: "30px" }}
            >
              Undergraduate Researchers
            </Typography>
            <hr style={{ width: "100%" }} />
          </GridContainer>

          <GridContainer className="padding">
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
      </Container>
      <Footer />
    </div>
  );
};

export default Teams;

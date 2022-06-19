import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Header from "components/Header/Header";
import Parallax from "components/Parallax/Parallax";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/team.js";
import HeaderLinks from "components/Header/HeaderLinks";
import classNames from "classnames";

import team1 from "./../../assets/img/team/1.webp";
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
    avatar: require("./../../assets/img/team/1.webp").default,
    details:
      "Project leader | research interests: water systems analysis, water pricing",
    contact: "hassaan.khan@sse.habib.edu.pk",
    status: true,
  },
  {
    name: "Dr. Nausheen H. Anwar",
    role: "Co-Principal Investigator",
    avatar: require("./../../assets/img/team/2.webp").default,
    details:
      "Advisor, socioeconomic studies | research interests: city and regional planning, climate change, infrastructures, inequality",
    contact: "nhanwar@iba.edu.pk",
    status: true,
  },
  {
    name: "Junaid Ahmed Memon",
    role: "Co-Principal Investigator",
    avatar: require("./../../assets/img/team/3.webp").default,
    details:
      "Technical lead (smart flowmeter development) | research interests: systems design, fluid flow measurement, wireless sensor networks and internet of things",
    contact: "junaid.memon@sse.habib.edu.pk",
    status: true,
  },
  {
    name: "Sana Khalil",
    role: "Faculty Assistant",
    avatar: require("./../../assets/img/team/4.webp").default,
    details:
      "Lead, water pricing | research interests: labor economics, applied econometrics, development economics",
    contact: "sana.khalil@ahss.habib.edu.pk",
    status: true,
  },
  {
    name: "Dr. Moiz Anis",
    role: "Faculty Researcher",
    avatar: require("./../../assets/img/team/5.webp").default,
    details:
      "Advisor, iot | research interests: cellular networks, internet of things, computer networking, and wireless communications.",
    contact: "moiz.anis@sse.habib.edu.pk",
    status: false,
  },
  {
    name: "Abdul Rehman Soomro",
    role: "",
    avatar: require("./../../assets/img/team/6.webp").default,
    details:
      "Flowmeter hardware development | research interests: hydroinformatics, embedded systems, water metering",
    contact: "abdul.soomro@sse.habib.edu.pk",
    status: false,
  },
  {
    name: "Syed Ali Arshad",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/7.webp").default,
    details:
      "Lyari study | research interests: urban planning, climate change mitigation, ecological justice",
    contact: "ali.arshad@sse.habib.edu.pk",
    status: false,
  },
  {
    name: "Hiba Jamal",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/8.webp").default,
    details:
      "Full stack developer | research interests: computer vision, machine learning modelling",
    contact: "hiba.jamal@habib.edu.pk",
    status: false,
  },
  {
    name: "Abdul Samad",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/9.webp").default,
    details:
      "Inventory control | research interests: water metering, surveys, electronic designing.",
    contact: "samad.shakir@sse.habib.edu.pk",
    status: false,
  },
  {
    name: "Azmat Ali",
    role: "Technician",
    avatar: require("./../../assets/img/team/10.webp").default,
    details:
      "Site Survey, PCB fabrication, Device Installation including Electrical and Plumbing work, etc.",
    contact: "azmat.ali@sse.habib.edu.pk",
    status: true,
  },
  {
    name: "Dr. Sahaab B. Sheikh",
    role: "Faculty researcher",
    avatar: require("./../../assets/img/team/11.webp").default,
    details: "Research interests: Environmental, health, and labor economics",
    contact: "sahaab.bader@ahss.habib.edu.pk",
    status: true,
  },
  {
    name: "Dr. Syed Ali Hussain",
    role: "Media outreach advisor",
    avatar: require("./../../assets/img/team/15.webp").default,
    details:
      "Health and risk communication, Social influence and persuasion, Social media marketing",
    contact: "ali.hussain@ahss.habib.edu.pk",
    status: true,
  },
  {
    name: "Muhammad Aqib Yousuf",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/13.webp").default,
    details:
      "Researcher, socioeconomic studies | research interest: urban and citizen-led planning, social capital, climate change",
    contact: "aqib.yousuf@sse.habib.edu.pk",
    status: true,
  },
  {
    name: "Syed Muhammad Ali Rizvi",
    role: "Researcher",
    avatar: require("./../../assets/img/team/12.webp").default,
    details:
      "Internet of things, robotics, systems design, low power sensor nodes, and computer vision",
    contact: "syed.alirizvi@sse.habib.edu.pk",
    status: true,
  },

  {
    name: "Ubaidullah Jamal",
    role: "Research Assistant",
    avatar: require("./../../assets/img/team/14.webp").default,
    details:
      "Researcher | Research Interests: Urban Planning, Climate Change & SRHR, and Social Epidemiology",
    contact: "ubaidullah.jamal@sse.habib.edu.pk",
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
  {
    name: "Ajab Shabbir Hussain",
    major: "Communication and Design",
    year: "2023",
  },
  {
    name: "Rida Rehan Chughtai",
    major: "SDP",
    year: "2024",
  },
  {
    name: "Aimen Imtiaz",
    major: "SDP",
    year: "2024",
  },
  {
    name: "Syeda Khudaija Reza",
    major: "SDP",
    year: "2024",
  },
];
const activeMembers = members.filter((member) => member.status);
const aluminiMembers = members.filter((member) => member.status === false);

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
      <Parallax
        image={require("assets/img/team-banner.webp").default}
        style={{ height: 430 }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <br />
                <br />
                <h2 className={classes.title}>Our Team</h2>
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

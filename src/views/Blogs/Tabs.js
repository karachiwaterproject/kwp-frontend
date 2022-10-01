import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import DescriptionIcon from "@material-ui/icons/Description";
import { research } from "constrants";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import { videos } from "constrants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SocialTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Articles" icon={<DescriptionIcon />} {...a11yProps(0)} />
          <Tab label="Videos" icon={<VideoLibraryIcon />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", marginBottom: "30px" }}
        >
          Articles
        </Typography>
        <hr style={{ width: "100%" }} />
        <br />
        <GridContainer>
          {research.map(({ name, image, description, url }) => (
            <GridItem key={name} xs={12} sm={12} lg={12}>
              {url ? (
                <a href={url} target="_blank" style={{ pointer: "cursor" }}>
                  <OnGoingProjects
                    name={name}
                    description={description}
                    image={image}
                  />
                </a>
              ) : (
                <OnGoingProjects
                  name={name}
                  description={description}
                  image={image}
                />
              )}
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", marginBottom: "30px" }}
        >
          Videos
        </Typography>
        <hr style={{ width: "100%" }} />
        <br />
        <GridContainer>
          {videos.map(({ name, url }) => (
            <GridItem key={name} xs={12} sm={12} lg={12}>
              <iframe
                width="100%"
                height="315"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div>
                <br />{" "}
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="h6"
                >
                  <b style={{ marginBottom: "10px" }}>Title: {name}</b>
                </Typography>
              </div>
            </GridItem>
          ))}
        </GridContainer>
      </TabPanel>
    </div>
  );
}

const useCustomStyles = makeStyles((theme) => ({
  root: {
    width: "97%",
    height: "280px",
    marginTop: 40,
    marginBottom: 60,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const OnGoingProjects = ({ name, image, description }) => {
  const classes = useCustomStyles();
  return (
    <div
      className={classes.root + " ccard"}
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        boxShadow: ".5rem .5rem .5rem .5rem rgba(0,0,0,.15)",
        borderRadius: "5px",
        marginTop: "60px",
        backgroundPosition: "center center",
      }}
    >
      <div
        style={{
          background: "white",
          boxShadow: "0 1rem 1.5rem 0.5rem  rgba(0,0,0,.15)",
          minHeight: "60%",
          display: "flex",
          borderRadius: "5px",
          alignItems: "center",
          position: "absolute",
          right: "0px",
          bottom: "-40px",
          width: "90%",
          padding: "12px 20px",
          opacity: 0.89,
        }}
      >
        <div>
          <Typography variant="body1" color="textSecondary" component="p">
            <b style={{ marginBottom: "10px" }}>{name}</b>
            <br />
            <span style={{ marginTop: "30px" }}>{description}</span>
          </Typography>
        </div>
      </div>
    </div>
  );
};

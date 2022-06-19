import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbDown from "@material-ui/icons/ThumbDown";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import { TwitterTimelineEmbed } from "react-twitter-embed";

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
          <Tab
            label="Facebook Posts"
            icon={<FacebookIcon />}
            {...a11yProps(0)}
          />
          <Tab
            label="Twitter Tweets"
            icon={<TwitterIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="Instagram Reels"
            icon={<InstagramIcon />}
            {...a11yProps(2)}
          />
          <Tab
            label="Youtube Videos"
            icon={<YouTubeIcon />}
            {...a11yProps(3)}
          />
          <Tab label="Blogs" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Facebook Posts
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <a
          class="twitter-timeline"
          href="https://twitter.com/karachi_water?ref_src=twsrc%5Etfw"
        >
          Tweets by karachi_water
        </a>{" "} */}
        <div className="twitterContainer">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="karachi_water"
            scrolling="no"
            options={{ height: 1500 }}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Instagram
      </TabPanel>
      <TabPanel value={value} index={3}>
        Yotuuvbe videos
      </TabPanel>
      <TabPanel value={value} index={4}>
        Blogs
      </TabPanel>
    </div>
  );
}

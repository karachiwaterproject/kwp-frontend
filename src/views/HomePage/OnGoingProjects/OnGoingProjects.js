import {
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Card from "components/Card/Card";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: "280px",
    marginTop: 40,
    marginBottom: 60,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

export const OnGoingProjects = ({ name, image }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root + " ccard"}
      style={{
        background: `url(${image})`,
        backgroundSize: "cover",
        boxShadow: ".5rem .5rem .5rem .5rem rgba(0,0,0,.15)",
        borderRadius: "5px",

        backgroundPosition: "center center",
      }}
    >
      <div
        style={{
          background: "white",
          boxShadow: "0 1rem 1rem 1rem  rgba(0,0,0,.15)",
          height: "30%",
          display: "flex",
          borderRadius: "5px",
          alignItems: "center",
          position: "absolute",
          left: "50px",
          bottom: "20px",
          padding: "12px 20px",
        }}
      >
        <Typography variant="body2" color="textSecondary" component="p">
          {name}
        </Typography>
      </div>
    </div>
  );
};

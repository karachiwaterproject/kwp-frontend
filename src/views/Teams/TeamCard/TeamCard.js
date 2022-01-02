import {
  Button,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Card from "components/Card/Card";
import React from "react";
import { ArrowUpward, Settings } from "@material-ui/icons";

import styles from "assets/jss/material-kit-react/views/teamPageSections/teamCard.js";
const useStyles = makeStyles(styles);

const TeamCard = ({ name, avatar, role, contact }) => {
  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      className={classes.card}
      style={{ backgroundImage: `url(${avatar})` }}
    >
      <CardContent className={classes.cardContent + " trigger-details"}>
        <div className={classes.cardMain + " card-main"} />

        <Settings className={classes.icon} />
        <div className="extra-content">
          <Typography gutterBottom style={{ fontWeight: "bolder" }}>
            {name}
          </Typography>

          <Typography gutterBottom variant="body2">
            Role: <br />
            {role}
          </Typography>
          <Typography gutterBottom variant="body2">
            Contact: <br />
            {contact}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;

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

const TeamCard = ({ name, avatar, role, contact, details }) => {
  const classes = useStyles();
  const [showExtra, setShowExtra] = React.useState("none");

  return (
    <Card
      variant="outlined"
      className={classes.card}
      style={{
        backgroundImage: `url(${avatar})`,
        backgroundSize: "100% 100%",
      }}
    >
      <CardContent className={classes.cardContent + " trigger-details"}>
        <div className={classes.cardMain + " card-main"} />

        <div className={classes.icon + " flip-icon"}>
          <img
            src={require("assets/img/hvr-flip.svg").default}
            alt=""
            className="hvr-flip"
          />
        </div>
        <div className="extra-content">
          <div>
            <Typography
              gutterBottom
              style={{ fontWeight: "100", width: "100%" }}
            >
              <span style={{ fontWeight: "800", fontSize: "16px" }}>
                {name}
              </span>
              <br />
              <span style={{ fontSize: "12px" }}>{role}</span>
            </Typography>

            <Typography gutterBottom variant="p" style={{ width: "100%" }}>
              <span style={{ fontWeight: "bold", fontSize: "12px" }}>
                Role:
              </span>{" "}
              <br />
              <span className="details">{details}</span>
            </Typography>
            <br />
            <Typography gutterBottom variant="p">
              {/* <span style={{ fontWeight: "bold", fontSize: "12px" }}>
              Contact:
            </span>{" "} */}
              <span className="details">{contact}</span>
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;

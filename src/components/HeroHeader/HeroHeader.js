import React from "react";
import styles from "assets/jss/material-kit-react/components/heroHeaderStyle.js";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(styles);

const HeroHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <svg className={classes.vector} x="0px" y="0px" viewBox="0 0 1440 320">
        <path d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,112C1040,107,1120,149,1200,144C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" />
        {/* <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon> */}
      </svg>
      {/* <svg
        className={classes.vector}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,112C1040,107,1120,149,1200,144C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default HeroHeader;
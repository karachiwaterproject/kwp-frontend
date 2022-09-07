import React from "react";
import styles from "assets/jss/material-kit-react/components/heroHeaderStyle.js";
import { Container, makeStyles } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const useStyles = makeStyles(styles);

const FrontParallax = ({ image, head }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.main}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <svg className={classes.vector} x="0px" y="0px" viewBox="0 0 1440 320">
        {/* <path d="M0,64L34.3,80C68.6,96,137,128,206,122.7C274.3,117,343,75,411,85.3C480,96,549,160,617,154.7C685.7,149,754,75,823,58.7C891.4,43,960,85,1029,112C1097.1,139,1166,149,1234,160C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path> */}

        <path d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,74.7C560,75,640,117,720,133.3C800,149,880,139,960,128C1040,117,1120,107,1200,106.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        {/* <path d="M0,256L40,234.7C80,213,160,171,240,170.7C320,171,400,213,480,224C560,235,640,213,720,218.7C800,224,880,256,960,272C1040,288,1120,288,1200,277.3C1280,267,1360,245,1400,234.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path> */}

        {/* <path d="M0,320L40,288C80,256,160,192,240,176C320,160,400,192,480,208C560,224,640,224,720,197.3C800,171,880,117,960,112C1040,107,1120,149,1200,144C1280,139,1360,85,1400,58.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" /> */}
        {/* <polygon points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"></polygon> */}
      </svg>
      <div
        style={{
          zIndex: "1",
          position: "relative",
          color: "white",
          padding: "100px 80px",
          backgroundColor: "rgba(0,0,0,.5)",
          height: "100vh",
        }}
      >
        <Container>
          <GridContainer>
            <GridItem>
              <div className={classes.brand + " brand"}>
                <br />
                <br />
                <h2 className={classes.title}>{head}</h2>
                <h3 className={classes.subtitle}></h3>
              </div>
            </GridItem>
          </GridContainer>
        </Container>
      </div>
    </div>
  );
};

export default FrontParallax;

import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

class Carousel extends Component {
  static get CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
    };
  }

  render() {
    return (
      <ReactCardCarousel
        style={{
          backgroundColor: "yellow",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        autoplay={true}
        autoplay_speed={2500}
      >
        <div style={Carousel.CARD_STYLE}>First Card</div>
        <div style={Carousel.CARD_STYLE}>Second Card</div>
        <div style={Carousel.CARD_STYLE}>Third Card</div>
        <div style={Carousel.CARD_STYLE}>Fourth Card</div>
        <div style={Carousel.CARD_STYLE}>Fifth Card</div>
      </ReactCardCarousel>
    );
  }
}

export default Carousel;

{
  /* <GridContainer style={{ paddingTop: 50 }}>
            <div
              style={{
                width: "100%",
                padding: "30px 80px",
              }}
            >
              <GridContainer>
                <GridItem xs={12} sm={12} lg={5}>
                  <Typography
                    style={{
                      textAlign: "center",
                      letterSpacing: "10px",
                      textTransform: "uppercase",
                      lineHeight: "1",
                      fontWeight: "500",
                    }}
                    variant="h3"
                  >
                    Testimonials
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </Typography>
                </GridItem>
                <GridItem
                  xs={12}
                  sm={12}
                  lg={7}
                  style={{
                    padding: "0 100px",
                    height: 290,
                    position: "relative",
                  }}
                >
                  <ReactCardCarousel
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                    autoplay={true}
                    autoplay_speed={2500}
                    disable_box_shadow={true}
                    spread="wide"
                  >
                    {testimonials.map(({ name, date, comment }) => (
                      <Card
                        className={classes.root}
                        style={{
                          width: 250,
                          minHeight: 200,
                          boxShadow: ".5rem .5rem 1rem 1rem rgba(0,0,0,.15)",
                        }}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                            ></Avatar>
                          }
                          title={`${name}`}
                          subheader={`${date}`}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {comment}
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </ReactCardCarousel>
                  
                </GridItem>
              </GridContainer>
            </div>
          </GridContainer> */
}

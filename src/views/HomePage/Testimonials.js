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

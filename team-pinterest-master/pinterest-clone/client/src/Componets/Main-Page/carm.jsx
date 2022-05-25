import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
            <img className="w-full h-85" src="img1.png"></img>
          </div>
          <div>
            <img  className="w-full h-85" src="img2.png"></img>
          </div>
          <div>
            <img  className="w-full h-85" src="img3.png"></img>
          </div>
          <div>
            <img  className="w-full h-85" src="img4.png"></img>
          </div>
        </Slider>
      </div>
    );
  }
}

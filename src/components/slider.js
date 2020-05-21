import React, { Component } from 'react';
import Slider from "react-slick";

import cristizach from "../../static/assets/images/cristizach.jpg"
import ericagoose from "../../static/assets/images/ericagoose.jpg"
import philkels from "../../static/assets/images/philkels.jpg"
import rj from "../../static/assets/images/rj.jpg"
import "../style/slider.scss"

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 3000, //scroll speed
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 700, //start delay
    };
    return (
      <Slider {...settings} >

        <div>
          <img src={rj} />
        </div>
        <div>
          <img src={cristizach} />
        </div>
        <div>
          <img src={ericagoose} />
        </div>
        <div>
          <img src={philkels} />
        </div>

      </Slider>
    );
  }
}
import React, { Component } from "react"
import Header from "../header"
import SimpleSlider from "../slider"
import "../../style/slider.scss"

export default class Sassafras extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (

      <div className="content-page-wrapper background home blog custom-header header-image header-full-width  front-page">
        <a href="/" className="to-top" title="Back To Top">Top</a>
        <div className="site-container" style={{ backgroundImage: "url(../)" }} >
          <div className="wrap1" >
            <div className="wrap2">
              <Header />
            </div>
          </div>
        </div>
      </div>

    )
  }
}
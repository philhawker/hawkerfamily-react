import React from "react"
import logoletters from "../../static/assets/images/familylogoletters.jpg"
import SimpleSlider from "./slider"
import rj from "../../static/assets/images/rj.jpg"

export default function () {

  return (
    <div className="content-page-wrapper background home blog custom-header header-image header-full-width content-sidebar genesis-breadcrumbs-hidden genesis-footer-widgets-visible front-page">
      <a href="/" className="to-top" title="Back To Top">Top</a>
      <div className="site-container">
        <div className="wrap1" style={{ backgroundImage: "url(../)" }}>
          <div className="wrap2">
            <header className="site-header" >
              <div className="wrap">
                <nav className="nav-secondary" aria-label="Secondary" >

                </nav>
                <div className="title-area" >
                  <p className="site-title" style={{ display: "flex", flexDirection: "column" }} >
                    Hawker Family
                    <a
                      className="header-image logo-letters site-title"
                      style={{
                        backgroundColor: "transparent",
                        backgroundImage: `url(${logoletters})`,
                        backgroundRepeat: "no-repeat",
                      }}></a>
                  </p>
                </div>
              </div>
            </header>

            {/* NAVBAR START */}
            <nav className="nav-primary" aria-label="Main" itemScope="" itemType="https://schema.org/SiteNavigationElement">
              <div className="wrap">
                <div className="responsive-menu-icon">
                </div>
                <ul id="menu-primary-menu-2" className="menu genesis-nav-menu menu-primary responsive-menu">
                  <li id="menu-item-735" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-735">
                    <a href="/" >
                      <span itemProp="name">Home</span>
                    </a>
                  </li>
                  <li id="menu-item-736" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-736">
                    <a href="/" itemProp="url">
                      <span itemProp="name">About Us</span>
                    </a>
                  </li>
                  <li id="menu-item-737" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-737">
                    <a href="/" itemProp="url">
                      <span itemProp="name">Our Faith</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <SimpleSlider />


            {/* NAVBAR END */}
          </div>
        </div>
      </div>
    </div>
  )
}

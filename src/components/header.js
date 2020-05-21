import React from "react"
import logo from "../../static/assets/images/familylogo.jpg"

export default function () {

  return (
    <div className="content-page-wrapper background home blog custom-header header-image header-full-width content-sidebar genesis-breadcrumbs-hidden genesis-footer-widgets-visible front-page">
      <a href="/" class="to-top" title="Back To Top">Top</a>
      <div className="site-container">
        <div className="wrap1" style={{ backgroundImage: "url(../)" }}>
          <div className="wrap2">
            <header class="site-header" itemscope="" itemtype="https://schema.org/WPHeader">
              <div class="wrap">
                <nav class="nav-secondary" aria-label="Secondary" itemscope=""
                  itemtype="https://schema.org/SiteNavigationElement">

                </nav>
                <div class="title-area" >
                  <p class="site-title" itemprop="headline" ><a href="/" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: "no-repeat" }}>Hawker Family</a></p>
                </div>
              </div>
            </header>

            {/* NAVBAR START */}
            <nav class="nav-primary" aria-label="Main" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
              <div class="wrap">
                <div class="responsive-menu-icon">
                </div>
                <ul id="menu-primary-menu-2" class="menu genesis-nav-menu menu-primary responsive-menu">
                  <li id="menu-item-735" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-735">
                    <a href="https://hawkerfamily.com" aria-current="page" itemprop="url">
                      <span itemprop="name">Home</span>
                    </a>
                  </li>
                  <li id="menu-item-736" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-736">
                    <a href="https://hawkerfamily.com/aboutus" itemprop="url">
                      <span itemprop="name">About Us</span>
                    </a>
                  </li>
                  <li id="menu-item-737" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-737">
                    <a href="https://hawkerfamily.com/our" itemprop="url">
                      <span itemprop="name">Our Faith</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* NAVBAR END */}
          </div>
        </div>
      </div>
    </div>
  )
}
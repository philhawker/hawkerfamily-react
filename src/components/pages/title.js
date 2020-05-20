import React, { Componentss } from "react"

export default class Title extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div>
        <div class="title-area">
          <p class="site-title" itemprop="headline">
            <a href="https://hawkerfamily.com/">Hawker Family</a>
          </p>
        </div>
      </div>
    )
  }
}
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div>
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src="images/profile.png" alt="" />
        </a>
        <h1>
          I'm <strong>Cecil John Tantay</strong>. I'm a web developer from
          Northridge, California.
        </h1>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Cecil John Tantay</h1>
        <p>Full Stack Web Developer<br />
        Check out my <a href="https://github.com/cjbt" target="blank_">GitHub</a>.</p>
    </header>
)

export default Header

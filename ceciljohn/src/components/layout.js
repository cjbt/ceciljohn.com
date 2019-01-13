import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.scss'
import './sass/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}

          <footer id="footer">
            <div className="inner">
              <ul className="icons">
                <li>
                  <a href="#" className="icon fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cjbt" className="icon fa-github">
                    <span className="label">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/cjtantay/"
                    className="icon fa-linkedin"
                  >
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cjbtantay@gmail.com"
                    className="icon fa-envelope-o"
                  >
                    <span className="label">Email</span>
                  </a>
                </li>
              </ul>
              <ul className="copyright">
                <li>&copy; Cecil John Tantay</li>
              </ul>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

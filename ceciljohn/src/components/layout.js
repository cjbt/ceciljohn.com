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
            <div class="inner">
              <ul class="icons">
                <li>
                  <a href="#" class="icon fa-twitter">
                    <span class="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cjbt" class="icon fa-github">
                    <span class="label">Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/cjtantay/"
                    class="icon fa-linkedin"
                  >
                    <span class="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:cjbtantay@gmail.com"
                    class="icon fa-envelope-o"
                  >
                    <span class="label">Email</span>
                  </a>
                </li>
              </ul>
              <ul class="copyright">
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

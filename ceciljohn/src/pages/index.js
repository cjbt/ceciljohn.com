import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div id="main">
      <section id="one">
        <header className="major">
          <h2>So what about me?</h2>
        </header>
        <p>
          I am devoted to making meaningful and genuine contributions to the
          lives of those who I encounter and that reflects not only to who I am,
          but also the code that I write. That's my moto, and because of it,
          everything else that I do falls in that very line. I am passionate
          about the enrichment of people and their experiences when it comes
          software that help in that regard. I am an enthusiast at heart,
          curious by nature and my passions carry into all aspects of my life;
          because I bring it with me wherever I go.
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button icon fa-download">
              Download My Resume
            </a>
          </li>
        </ul>
        {/* </ul> */}
      </section>

      <section id="two">
        <h2>Recent Work</h2>
        <div className="row">
          <article className="col-6 col-12-xsmall work-item">
            <a href="images/fulls/instantgram.jpeg" className="image fit thumb">
              <img src="images/thumbs/instantgram.jpeg" alt="" />
            </a>
            <h3>
              <a href="http://instantgram.netlify.com" target="blank_">
                InstantGram - Instagram clone using React and SaSS
              </a>
            </h3>
            <p>
              <a href="https://github.com/cjbt/insta-clone" target="blank_">
                Source Code
              </a>
            </p>
          </article>
          <article className="col-6 col-12-xsmall work-item">
            <a href="images/fulls/sja-app.png" className="image fit thumb">
              <img src="images/thumbs/sja-app-thumb.png" alt="" />
            </a>
            <h3>
              <a href="http://sja-app.netlify.com" target="blank_">
                Smith & Jones Architect - MVP using React and LESS
              </a>
            </h3>
            <p>
              <a
                href="https://github.com/cjbt/SJ-Architects-react-app"
                target="blank_"
              >
                Source Code
              </a>
            </p>
          </article>
          <article className="col-6 col-12-xsmall work-item">
            <a href="images/fulls/bcnet.jpg" className="image fit thumb">
              <img src="images/thumbs/bcnet.jpg" alt="" />
            </a>
            <h3>
              <a href="http://bcnet.netlify.com" target="blank_">
                Business Connect Network - HTML, CSS, and JavaScript
              </a>
            </h3>
            <p>
              <a href="https://github.com/cjbt/bcn" target="blank_">
                Source Code
              </a>
            </p>
          </article>
          <article className="col-6 col-12-xsmall work-item">
            <a href="images/fulls/pg-battles.jpg" className="image fit thumb">
              <img src="images/thumbs/pg-battles.jpg" alt="" />
            </a>
            <h3>
              <a
                href="https://pgbattles.netlify.com/index.html"
                target="blank_"
              >
                Point Guard Battles - HTML, CSS, JavaScript
              </a>
            </h3>
            <p>
              <a
                href="https://github.com/cjbt/pointguardbattles"
                target="blank_"
              >
                Source Code
              </a>
            </p>
          </article>
        </div>
        <ul className="actions">
          <li>
            <a
              href="https://github.com/cjbt"
              target="blank_"
              className="button"
            >
              See More At My GitHub
            </a>
          </li>
        </ul>
      </section>

      <section id="three">
        <h2>Get In Touch</h2>

        <div className="row">
          <div className="col-8 col-12-small">
            <form method="post" action="#">
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                  />
                </div>
              </div>
            </form>
            <ul className="actions">
              <li>
                <input className="primary" type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
          <div className="col-4 col-12-small">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Northridge
                <br />
                California
                <br />
                United States
              </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
                310-997-8787
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:cjbtantay@gmail.com">cjbtantay@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

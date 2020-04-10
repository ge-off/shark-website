import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <header>
          <div id="logo-div">
            <Link to="/" className="link-logo">
              <a>LOGO</a>
            </Link>
          </div>
          <div id="navbar-div">
            <nav id="navbar">
              <div>
                <Link to="/aboutus" className="link-nav">
                  <a>ABOUT US</a>
                </Link>
              </div>
              <div>
                <Link to="/service" className="link-nav">
                  <a>SERVICE</a>
                </Link>
              </div>
              <div>
                <Link to="/faq" className="link-nav">
                  <a>FAQ</a>
                </Link>
              </div>
              <div>
                <Link to="/contactus" className="link-nav">
                  <a>CONTACT US</a>
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main>
          <div className="contents-header">
            <span>ABOUT US</span>
          </div>
          <div className="contents">
            <h2>
              저희 SHARK는 10년 이상의 시간동안 뉴질랜드와 한국 사이의 배송을
              책임져 왔습니다.
            </h2>
            <h2>앞으로도 신속하고 안전한 배송을 위해 최선을 다하겠습니다.</h2>
          </div>
        </main>

        <footer>
          <div id="border-contents">
            <div id="footer-content">
              <table id="footer-nav">
                <tr>
                  <th>Shark Logistics</th>
                  <th>Discover</th>
                  <th>Support</th>
                </tr>
                <tr>
                  <td>
                    <a>Careers</a>
                  </td>
                  <td>
                    <a>list of Services</a>
                  </td>
                  <td>
                    <a>What we can support?</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a>first column</a>
                  </td>
                  <td>
                    <a>second column</a>
                  </td>
                  <td>
                    <a>third column</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a>first column</a>
                  </td>
                  <td>
                    <a>second column</a>
                  </td>
                  <td>
                    <a>third column</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a>first column</a>
                  </td>
                  <td>
                    <a>second column</a>
                  </td>
                  <td>
                    <a>third column</a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div id="border-copyright">
            <div id="copyright-div">
              <div id="copyright-contents">
                <span>
                  &copy; 2020 Shark Logistics Ltd. All rights reserved. &nbsp;
                  <a>Terms</a>&nbsp;&#183;&nbsp;<a>Privacy</a>
                </span>
              </div>
              <div id="sns-div">
                <table id="sns-icon">
                  <tr>
                    <td>
                      <a>
                        <img src="/img/kakaotalk-black.png" />
                      </a>
                    </td>
                    <td>
                      <a>
                        <img src="/img/facebook-black.png" />
                      </a>
                    </td>
                    <td>
                      <a>
                        <img src="/img/instagram-black.png" />
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default About;

import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

class Service extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="main">
        <header>
          <div id="header-contents">
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
          </div>
        </header>

        <main>
          <div id="contents-header">
            <span>SERVICE</span>
          </div>
          <div id="contents-service">
            <div id="line-div">
              <div id="line"></div>
            </div>
            <table id="table-service">
              <tr>
                <td>
                  <div id="airfreight">
                    <div>
                      <img src="/img/air-freight.png" />
                    </div>
                    <div>
                      <a>AIR FREIGHT</a>
                    </div>
                  </div>
                </td>
                <td>
                  <div id="seafreight">
                    <div>
                      <img src="/img/sea-freight.png" />
                    </div>
                    <div>
                      <a>SEA FREIGHT</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div id="delivery">
                    <div>
                      <img src="/img/delivery.png" />
                    </div>
                    <div>
                      <a>DELIVERY</a>
                    </div>
                  </div>
                </td>
                <td>
                  <div id="warehouse">
                    <div>
                      <img src="/img/warehouse.png" />
                    </div>
                    <div>
                      <a>WARE HOUSING</a>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <div id="line-div">
              <div id="line"></div>
            </div>
            <div id="section-div">
              <section id="air">
                <div id="air-header-div">
                  <span>AIR FREIGHT</span>
                </div>
                <div id="air-option-header">
                  <div id="option-wrapper">
                    <span>
                      <strong>KR > NZ</strong>
                    </span>
                    <br />
                    <span>배송방법안내</span>
                  </div>
                  <div id="delivery-step">
                    <div></div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* <footer>
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
        </footer> */}
      </div>
    );
  }
}

export default Service;

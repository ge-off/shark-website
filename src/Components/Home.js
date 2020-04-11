import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <div className="img-div">
          <div className="navbar-div">
            <nav className="logo">
              <Link to="/" className="link-logo">
                <a>LOGO</a>
              </Link>
            </nav>
            <nav className="navbar">
              <Link to="/aboutus" className="link-nav">
                <a>ABOUT US</a>
              </Link>
              <Link to="/service" className="link-nav">
                <a>SERVICE</a>
              </Link>
              <Link to="/faq" className="link-nav">
                <a>FAQ</a>
              </Link>
              <Link to="/contactus" className="link-nav">
                <a>CONTACT US</a>
              </Link>
            </nav>
          </div>
          <div className="track-container">
            <div className="track-header">
              <img src="/img/track.png" />
              <h2>운송장 번호 조회</h2>
            </div>
            <div className="track-searchbar">
              <input
                type="text"
                placeholder="&#8216;-&#8217;을 제외한 숫자를 입력해주세요."
                className="search-input"
              />
              <div className="search-button">
                <img src="/img/search.png" />
              </div>
            </div>
          </div>
          <div className="sns-container">
            <table>
              <tr>
                <td>
                  <a>
                    <img src="/img/kakaotalk.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>
                    <img src="/img/facebook.png" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a>
                    <img src="/img/instagram.png" />
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div className="footer-div">
            &copy; 2020 Shark Logistics Ltd. All rights reserved. &nbsp;
            <a>Terms</a>&nbsp;&#183;&nbsp;<a>Privacy</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";

class FAQ extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main-wrapper">
        <header>
          <div id="header-contents">
            <div id="logo-div">
              <Link to="/" id="link-logo">
                <a>LOGO</a>
              </Link>
            </div>
            <div id="navbar-div">
              <nav id="navbar">
                <div>
                  <Link to="/aboutus" id="link-nav">
                    <a>ABOUT US</a>
                  </Link>
                </div>
                <div>
                  <Link to="/service" id="link-nav">
                    <a>SERVICE</a>
                  </Link>
                </div>
                <div>
                  <Link to="/faq" id="link-nav">
                    <a>FAQ</a>
                  </Link>
                </div>
                <div>
                  <Link to="/contactus" id="link-nav">
                    <a>CONTACT US</a>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <main>
          <div className="contents-header">
            <span>FAQ</span>
          </div>
          <div className="line-div">
            <div className="line"></div>
          </div>
          <div className="contents-faq">
            <div className="title-header">
              <div className="title-wrapper">
                <span>자주하는 질문</span>
              </div>
            </div>
            <div className="faq-table">
              <table>
                <tr>
                  <td className="QnA">Q.</td>
                  <td className="answer">배송비가 어떻게 되나요?</td>
                </tr>
                <tr>
                  <td className="QnA">A.</td>
                  <td className="answer">
                    홈페이지의 가격 부분을 참조해주세요.
                  </td>
                </tr>
              </table>
            </div>
            <div className="faq-table">
              <table>
                <tr>
                  <td className="QnA">Q.</td>
                  <td className="answer">
                    한국에서 보내고 싶은데 어떻게 하나요?
                  </td>
                </tr>
                <tr>
                  <td className="QnA">A.</td>
                  <td className="answer">
                    SERVICE 탭에 들어가셔서 확인하실 수 있습니다.
                  </td>
                </tr>
              </table>
            </div>
            <div className="faq-table">
              <table>
                <tr>
                  <td className="QnA">Q.</td>
                  <td className="answer">한국까지 배송은 얼마나 걸리나요?</td>
                </tr>
                <tr>
                  <td className="QnA">A.</td>
                  <td className="answer">
                    비지니스데이 기준으로 4~5일 정도 소요됩니다.
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="line-div">
            <div className="line"></div>
          </div>
        </main>

        <footer>
          <div id="border-content">
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

export default FAQ;

import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
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
          <div className="contents-header">
            <span>CONTACT US</span>
          </div>
          <div className="line-div">
            <div className="line"></div>
          </div>
          <div className="contents-contact">
            <div className="title-header">
              <div className="title-wrapper">
                <span>문의하기</span>
              </div>
            </div>
            <div className="contact-form">
              <div className="contact-wrapper">
                <form onSubmit={this.handleSubmit} id="quote">
                  <div>
                    <label>
                      <span>이름 :</span>
                      <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <span>주민번호 :</span>
                      <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <span>연락처 :</span>
                      <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <span>주소 :</span>
                      <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      <span>문의내용</span>
                    </label>
                    <br />
                    <textarea
                      rows="4"
                      cols="50"
                      name="comment"
                      form="usrform"
                    />
                  </div>
                  <div className="button-div">
                    <input type="submit" value="제출하기" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="line-div">
            <div className="line"></div>
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

export default Contact;

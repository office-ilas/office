import React from "react";
import { Link } from "gatsby";

// import logo from "../img/og-image.jpg";
// import aclogo from "../img/AcademicCentaral.png";
import aclogo from "../img/AcademicCentral_logo_0930_b.png";
import facebook from "../img/social/facebook.svg";
// import instagram from '../img/social/instagram.svg'
import twitter from "../img/social/twitter.svg";
// import vimeo from '../img/social/vimeo.svg'
import youtube from "../img/social/youtube.svg";
// import github from "../img/github-icon.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <a href="https://ac.thers.ac.jp">
            <img src={aclogo} alt="東海国立大学機構アカデミック・セントラル" style={{ width: "400px" }} />
            {/* <img src={aclogo} alt="東海国立大学機構アカデミック・セントラル" style={{ width: "328px", height: "144px" }} /> */}
          </a>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        アカデミック・セントラル
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/division/">
                        部門
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/awards/">
                        表彰
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/news/">
                        ニュース
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://academic-central.netlify.app/admin/" target="_blank" rel="noopener noreferrer">
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <a className="navbar-item" href="https://www.thers.ac.jp">
                        東海国立大学機構
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.gifu.ac.jp">
                        岐阜大学
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.nagoya-u.ac.jp/">
                        名古屋大学
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/">
                        お問い合わせ
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                岐大
                <a title="twitter" href="https://twitter.com/GifuUniv_PR">
                  <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: "1em", height: "1em" }} />
                </a>
                <a title="youtube" href="https://www.gifu-u.ac.jp/about/publication/glg/PV_2015.html#opening">
                  <img src={youtube} alt="youtube" style={{ width: "1em", height: "1em" }} />
                </a>
                <br />
                <br />
                名大
                <a title="twitter" href="https://twitter.com/NagoyaUniv_info">
                  <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: "1em", height: "1em" }} />
                </a>
                <a title="youtube" href="https://www.youtube.com/user/NagoyaUniversityPR">
                  <img src={youtube} alt="youtube" style={{ width: "1em", height: "1em" }} />
                </a>
                <a title="facebook" href="https://www.facebook.com/Nagoya.Univ.info">
                  <img src={facebook} alt="Facebook" style={{ width: "1em", height: "1em" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

import React from "react";
// import { Link } from "gatsby";

//import OldOfficeLogo from "../img/OldOfficeLogo.png";
import facebook from "../img/social/facebook.svg";
// import instagram from '../img/social/instagram.svg'
import twitter from "../img/social/twitter.svg";
// import vimeo from '../img/social/vimeo.svg'
import youtube from "../img/social/youtube.svg";
// import github from "../img/github-icon.svg";

import access from '../img/banner/banner-access.png'
import ilas from '../img/banner/banner-ilas.png'
import meiwriting from '../img/banner/banner-mei-writing.png'
import nu from '../img/banner/banner-nu.png'
import ocw from '../img/banner/banner-ocw.png'
import portal from '../img/banner/banner-portal.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-light has-text-white-ter">
{/*
        <div className="content has-text-centered">
          <a href="https://office.ilas.nagoya-u.ac.jp/">
            <img src={OldOfficeLogo} alt="旧サイト" style={{ width: "400px" }} />
          </a>
        </div>
*/}
        <div className="content has-text-centered has-background-grey-light has-text-white-ter">
          <div className="container has-background-grey-light has-text-white-ter">
            <div className="columns">
              <div className="column is-2">
              <a href="https://www.nagoya-u.ac.jp/">
              <img src={nu} alt="名古屋大学" />  
              </a>
              </div>
              <div className="column is-2">
              <a href="https://www.ilas.nagoya-u.ac.jp/">
              <img src={ilas} alt="名古屋大学教養教育院" /> 
              </a>
              </div>
              <div className="column is-2">
              <a href="https://portal.nagoya-u.ac.jp/">
              <img src={portal} alt="名古屋大学ポータル" /> 
              </a>
              </div>
              <div className="column is-2">
              <a href="https://ocw.nagoya-u.jp/">
              <img src={ocw} alt="名大の授業" /> 
              </a>
              </div>
              <div className="column is-2">
              <a href="http://meiwriting.ilas.nagoya-u.ac.jp/">
              <img src={meiwriting} alt="名古屋大学ライティングセンター"  /> 
              </a>
              </div>
              <div className="column is-2">
              <a href="https://elearn.ilas.nagoya-u.ac.jp/access/">
              <img src={access} alt="AccESS" />
              </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12 social">
                <a title="twitter" href="https://twitter.com/NagoyaUniv_ilas">
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

import React from "react";
import { Link } from "gatsby";
import officelogo from "../img/OfficeLogo.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: "is-active"
          })
          : this.setState({
            navBarActiveClass: ""
          });
      }
    );
  };

  render() {
    return (
      <nav className="navbar is-success" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Academic Central" style={{ width: "88px" }} /> */}
              <img src={officelogo} alt="Ilas Office" style={{ height: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md#how-do-i-resolve-this-error
              role="menuitem"
              tabIndex={0}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>

            <div className="navbar-start has-text-centered">
              {/*  
              <div className="navbar-item">
              資料【準備中】/DOCUMENTS【COMING SOON】
              </div>
              */}
              <Link className="navbar-item" to="/news/">
                お知らせ/NEWS
              </Link>
              <Link className="navbar-item" to="/tags/">
                カテゴリ/CATEGORY
              </Link>
              {/* </div> */}

              {/* <div className="navbar-end"> */}
              <Link className="navbar-item" to="/contact/">
                お問い合わせ/CONTACT
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
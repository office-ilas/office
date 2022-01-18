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
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
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
            
            <div className="navbar-item has-dropdown is-hoverable">
              
              <div className="navbar-link">
              {/*  <Link to="/src/"> */}
                  <div className="navbar-item">重要事項</div>
              {/*  </Link> */}
              </div>
              
              <div className="navbar-dropdown">
                <Link to="/pages/students-guide/">
                  <div className="navbar-item">全学教育科目履修の手引 STUDENTS' GUIDE </div>
                </Link>      
              </div>
            </div>
            
            <div className="navbar-start has-text-centered">
              {/*
              <Link className="navbar-item" to="/awards/">
                表彰
              </Link>
              */}
              <Link className="navbar-item" to="/news/">
            お知らせ(全件）
        </Link>
	       <Link className="navbar-item" to="/tags/">
            お知らせ(カテゴリ別）
              </Link>

              <Link className="navbar-item" to="/contact/">
                お問い合わせ
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

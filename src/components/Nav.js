import React from "react";
import "../components_styles/nav.css";
function Nav() {
  return (
    <nav>
      <div className="udemy-logo">
        <a href="/">
          <img
            className="udemy-img"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="udemy-logo"
            width="91"
            height="34"
          />
        </a>
      </div>
      <div className="categories-container">
        <a href="#">
          <strong className="txt">Categories</strong>
        </a>
      </div>
      <div className="search-bar-container">
        <button
          className="search-icon-btn"
          type="submit"
          onclick="document.querySelector('.courses').scrollIntoView();"
        >
          <img
            className="search-icon"
            src="../images/icons/search.png"
            alt=""
            height="15"
          />
        </button>
        <input
          className="search-bar"
          type="text"
          placeholder="Search for anything"
        />
      </div>
      <div className="udemy-business-container">
        <a href="#">
          <span className="txt">Udemy Buisness</span>
        </a>
      </div>
      <div className="udemy-teach-container">
        <a href="#">
          <span className="txt">Teach on Udemy</span>
        </a>
      </div>
      <div className="add-to-cart">
        <img
          className="cart"
          src="../images/icons/shopping-cart.png"
          alt=""
          height="20"
        />
      </div>
      <div className="log-in">
        <button className="button" type="submit">
          <span className="txt">log in</span>
        </button>
      </div>
      <div className="sign-up">
        <button className="button">
          <span className="txt">Sign up</span>
        </button>
      </div>
      <div className="language">
        <button className="button">
          <img
            className="lang-img"
            src="../images/icons/language.png"
            alt=""
            height="17"
          />
        </button>
      </div>
      <a href="#" className="toogle-btn">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </nav>
  );
}

export default Nav;

/*  */

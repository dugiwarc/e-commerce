import React from "react";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">Hats</div>
            <span className="subtitle">Shop now</span>
          </div>
        </div>{" "}
        <div className="menu-item">
          <div className="content">
            <div className="title">Jackets</div>
            <span className="subtitle">Shop now</span>
          </div>
        </div>{" "}
        <div className="menu-item">
          <div className="content">
            <div className="title">Sneakers</div>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Mens</div>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="title">Womens</div>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

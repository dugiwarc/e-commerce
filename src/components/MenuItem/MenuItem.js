import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  console.log(match.url);
  const MenuItemStyles = {
    backgroundImage: `url(${imageUrl})`,
    height: size && "380px"
  };
  return (
    <div
      className="MenuItem"
      style={MenuItemStyles}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

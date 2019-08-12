import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ text, type, isGoogleSignIn }) => {
  return (
    <button
      className={`CustomButton ${isGoogleSignIn && "google-sign-in"}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default CustomButton;

import React from "react";
import "./SignInAndSignUp.scss";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

class SignInAndSignUp extends React.Component {
  render() {
    return (
      <div className="SignInAndSignUp">
        <SignIn
          hasRequestedSignIn={this.props.hasRequestedSignIn}
          handleSignInRequest={this.props.handleSignInRequest}
        />
        <SignUp />
      </div>
    );
  }
}

export default SignInAndSignUp;

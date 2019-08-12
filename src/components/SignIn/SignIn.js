import React, { Component } from "react";

import FormInput from "../../components/FormInput/FormInput";
import CustomButton from "../../components/CustomButton/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./SignIn.scss";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSignInButton = () => {
    this.props.hasRequestedSignIn && signInWithGoogle();
  };

  render() {
    return (
      <div className="SignIn">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <CustomButton text="Submit" type="submit" />
          <button onClick={() => this.handleSignInButton()}>afsas</button>
        </form>
      </div>
    );
  }
}

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.scss";

import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import SignInAndSignUp from "./pages/SignInSignUP/SignInAndSignUp";
import Header from "./components/Header/Header";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  state = {
    currentUser: null,
    hasRequestedSignIn: true
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      // createUserProfileDocument(user);
      // this.setState({ currentUser: user }, () => {
      //   console.log(this.state.currentUser);
      // });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  handleSignInRequest = truth => {
    this.setState({ hasRequestedSignIn: truth });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path="/sign-in"
            render={props =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUp
                  {...props}
                  hasRequestedSignIn={this.state.hasRequestedSignIn}
                  handleSignInRequest={this.handleSignInRequest}
                />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

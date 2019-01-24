import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import DisplayCart from "./pages/Checkout/DisplayCart";
import Nav from "./components/Nav/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: null,
      loginUser: {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@gmail.com",
        phone: "222-345-4356",
        address: {
          street: "Canoga Blvd",
          number: "222",
          city: "Woodland Hills",
          state: "CA",
          zip: "91303"
        },
        userType: "customer",
        status: "ACTIVE"
      },
      cart: []
    };
  }
  setCart = citem => {
    if (Object.keys(citem).length == 0) {
      this.setState({ cart: citem }, function () {
        localStorage.setItem("cartdata", JSON.stringify(this.state));
      });
    } else {
      this.setState({ cart: [...this.state.cart, citem] }, function () {
        localStorage.setItem("cartdata", JSON.stringify(this.state));
      });
    }
  };

  componentWillMount() {
    const cartdata = localStorage.getItem("cartdata");

    if (cartdata) {
      this.setState(JSON.parse(cartdata));
    }
  }
  //kevin
  signInUser = (user) => {
    this.setState({ signedIn: true, user });
  }
  signOutUser = () => {
    this.setState({ signedIn: false, user: null });
  }//

  render() {
    return (
      <Router>
        <div>
          <Nav signedIn={this.state.signedIn} signInUser={this.signInUser} signOutUser={this.signOutUser} user={this.state.user} />
          {this.state.signedIn ?
            <Switch>
              <Route
                exact
                path="/"
                component={() =>
                  <Landing user={this.state.user} />} />

          <Route
            exact
            path="/DisplayCart"
            component={() => (
              <div>
                <DisplayCart
                  displaystatus={this.state.displaystatus}
                  loginUser={this.state.loginUser}
                  cart={this.state.cart}
                  setCart={this.setCart}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/Dashboard"
            component={() => (
              <Dashboard
                loginUser={this.state.loginUser}
                cart={this.state.cart}
                setCart={this.setCart}
              />
            )}
          />
          <Route component={NoMatch} />
          </Switch>
            : <Landing/>}

        </div>
      </Router >
    );
  }
}

export default App;
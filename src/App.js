import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop-page/shop.component';
import Header from './Components/header/header.component';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-out/Sign-in-and-sign-out.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state = { currentUser: null };

  unsubscribeFromAuth = null;

  componentDidMount() {
    /*  */
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {/* exact is good for only rendering the specifc URL. It doesn't render multiple components in one page */}
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </>
    );
  }
}

export default App;

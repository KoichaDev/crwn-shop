import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop-page/shop.component';
import Header from './Components/header/header.component';

function App() {
  return (
    <>
      <Header />
      <Switch>
        {/* exact is good for only rendering the specifc URL. It doesn't render multiple components in one page */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </>
  );
}

export default App;

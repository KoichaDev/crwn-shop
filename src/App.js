import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Homepage/homepage.component';

const HatsPage = () => (
  <>
    <h1>HATS PAGE</h1>
  </>
);

function App() {
  return (
    <div className='App'>
      <Switch>
        {/* exact is good for only rendering the specifc URL. It doesn't render multiple components in one page */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

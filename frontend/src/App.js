import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './components/navbar.js';
import Home from './components/home.js';
import UniversityPage from './components/university.js';
import PostalLookup from './components/postal.js';
import './App.css';

function App() {
  return (
    <Switch>
        <Route path='/home' exact render={() => <div className='App'><NavBar/><Home/></div>}/>
        <Route path='/university' exact render={() => <div className='App'><NavBar/><UniversityPage/></div>}/>
        <Route path='/postal-lookup' exact render={() => <div className='App'><NavBar/><PostalLookup/></div>}/>
        <Route path="/" exact render={() =><Redirect to="/home" />} />
    </Switch>
  );
}

export default App;

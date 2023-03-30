import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbaradmin from './Components/Navbaradmin';
import Navbaruser from './Components/Navbaruser';
import Applyfortrainer from './Components/Applyfortrainer';
import Userprofile from './Components/Userprofile';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="app">
     
      <Router>
        <Switch>
          <Route exact path="/">
          <Navbar />
          <Header />
          <Features />
          <Offer />
          <About />
          <Contact />
          </Route>
          <Route path="/login" component={(routeProps)=><Login {...routeProps} />}  />
          {/* <Route path="/Login"><Login /></Route> */}
          <Route path="/Register"><Register /></Route>
          <Route path="/Navbaradmin"><Navbaradmin /></Route>
          <Route path="/Navbaruser"><Navbaruser /></Route>
          <Route path="/Applyfortrainer"><Applyfortrainer /></Route> 
          <Route path="/Userprofile"><Userprofile /></Route> 
         
        </Switch>
      </Router>
    </div>

    
  );
}

export default App;

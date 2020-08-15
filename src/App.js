import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import BrandStatement from './components/BrandStatement';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './App.css'



function App() {
  return (
    <div className="App">
      <Router>  
        <Header />
        <BrandStatement />
          <Switch> 
            <Route exact path="/">
              <AboutMe />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;

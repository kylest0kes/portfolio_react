import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import BrandStatement from './components/BrandStatement';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import projectInfo from './projects'
import './App.css'

export class App extends Component {
  
  render() {
    console.log(projectInfo)
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
                  <Projects 
                  projectInfo={projectInfo}
                  />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch> 
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App

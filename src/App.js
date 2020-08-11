import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BrandStatement from './components/BrandStatement';
import AboutMe from './components/AboutMe';

import Resume from './components/Resume';
import './App.css'



function App() {
  return (
    <div className="App">
      <Header />
        <BrandStatement />
        <AboutMe />

        <Resume />
      <Footer />
    </div>
  );
}

export default App;

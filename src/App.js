import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BrandStatement from './components/BrandStatement';
import AboutMe from './components/AboutMe';
import './App.css'



function App() {
  return (
    <div className="App">
      <Header />
        <BrandStatement />
        <AboutMe />
      <Footer />
    </div>
  );
}

export default App;

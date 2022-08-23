import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './components/cover/header'
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Knowledge from './components/knowledge/knowledge'
import Proyectos from './components/proyects/proyectos';
import Footer from './components/footer/footer';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position)
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      < Cover />
      <About />
      <Knowledge />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;

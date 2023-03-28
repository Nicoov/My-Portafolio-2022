import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './components/cover/header'
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Knowledge from './components/knowledge/knowledge'
import Proyectos from './components/proyects/proyectos';
import Footer from './components/footer/footer';
import AnimaCursor from './components/cursor/cursoranimated';
import Contact from './components/contact/contact';

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
      <AnimaCursor />
      <Navbar isScrolling={scrollHeight} />
      < Cover />
      <About />
      <Knowledge />
      <Proyectos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

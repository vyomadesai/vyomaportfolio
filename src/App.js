import React from "react";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


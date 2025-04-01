import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gold min-h-screen">
      <Navbar />
      <section id="home" className="mb-32"><Home /></section>
      <section id="about" className="mb-32"><About /></section>
      <section id="projects" className="mb-32"><Projects /></section>
      <section id="contact" className="mb-32"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;

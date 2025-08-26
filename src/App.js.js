import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Stats from "./components/Stats.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Footer from "./components/Footer.js";
import Divider from "./components/Divider.js";

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      <Divider />

      {/* About Section */}
      <section id="About">
        <About />
      </section>
      <Divider />

      {/* Stats Section (if you want to link it separately) */}
      <section id="services">
        <Stats />
      </section>
      <Divider />

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>
      <Divider />

      {/* Projects Section */}
      <section id="Projects">
        <Projects />
      </section>
      <Divider />

      {/* Contact Section */}
      <section id="contact">
        <Footer /> {/* Always last */}
      </section>
    </div>
  );
}

export default App;


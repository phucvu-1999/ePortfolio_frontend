import React from "react";

import { About, Footer, Header, Skills, Testimonial, Works } from "./container";
import { Navbar } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;

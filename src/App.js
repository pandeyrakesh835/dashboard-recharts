import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

import Service from "./Service";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    
    </div>
  );
};

export default App;

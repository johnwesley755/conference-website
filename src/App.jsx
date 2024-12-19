import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Committee from "./pages/Committee";
import Call from "./pages/Call";
import Schedule from "./pages/Schedule";
import Submission from "./pages/Submission";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/committee' element={<Committee />} />
        <Route path='/call' element={<Call />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/submission" element={<Submission />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import '../assets/styles/App.scss';

import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
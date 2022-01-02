import React from "react";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import Register from "./Containers/Register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"


function App() {
  return (
    <Router>
      <ToastContainer autoClose={1000} />
      <Routes>
        <Route exact path="/" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;

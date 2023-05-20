import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About Us" mode = {mode} togglemode = {togglemode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode ={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to analyze below : " mode = {mode} showAlert = {showAlert}/>
          </Route>
        </Switch>
      </div>
        </Router>
    </>
  );
}

export default App;

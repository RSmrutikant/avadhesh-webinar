import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { Banner } from "./components/Banner";
import { Agenda } from "./components/Agenda";
import { Speaker } from "./components/Speaker";
import { Footer } from "./components/Footer";
import { RegForm } from "./components/RegForm";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Banner />
        <Agenda />
        <Speaker />
        <RegForm/>
        <Footer/>
      </Fragment>
    </div>
  );
}

export default App;

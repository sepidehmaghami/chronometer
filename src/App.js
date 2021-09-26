import React, { useState } from "react";
import i18n from "./utilies/i18n";
import Timer from "./components/timer/timer";
import Head from "./components/header/header";
import { Helmet } from "react-helmet";
import Clock from "./components/clock/clock";

import "./app.css";

function App() {
  const [isfa, setfa] = useState(false);
  const Detectfa = (lng) => {
    if (lng === "fa") {
      setfa(true);
    } else {
      setfa(false);
    }
  };

  i18n.on("languageChanged", (lng) => {
    Detectfa(lng);
  });

  return (
    <div className={isfa ? "rtl main persianNo" : "ltr main"}>
      {isfa && (
        <Helmet>
          <title> زمان سنج </title>
        </Helmet>
      )}
      {!isfa && (
        <Helmet>
          <title> Stopwatch </title>
        </Helmet>
      )}
      <Head />
      <div className="cintainer">
        <Clock />
        <Timer />
      </div>
    </div>
  );
}

export default App;

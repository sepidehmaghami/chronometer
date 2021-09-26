import React, { useState } from "react";
import "./timer.css";
import TimerContainer from "./timercontainer";
import { useTranslation } from "react-i18next";
import i18n from "../../utilies/i18n";

function Timer() {
  const { t } = useTranslation();
  const [isfa, setfa] = useState(false);
  const Detectfa = (lng) => {
    if (lng === "fa") setfa(true);
    else setfa(false);
  };
  i18n.on("languageChanged", (lng) => {
    Detectfa(lng);
  });
  const { timer, timeStart, timeStope, timeReset, timeOff } = TimerContainer(0);

  let milisec = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
  let second = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
  let minute = ("0" + Math.floor((timer / 10) % 100)).slice(-2);
  return (
    <div className="timeController">
      <div className="timer ltr">
        <span className={isfa ? "persianNo" : "font-eng"}> {milisec} : </span>
        <span className={isfa ? "persianNo" : "font-eng"}> {second} : </span>
        <span className={isfa ? "persianNo" : "font-eng"}> {minute} </span>
      </div>
      <div className="btnController">
        {!timeOff ? (
          <button className="btn" onClick={timeStart}>
            {t("btn.start")}
          </button>
        ) : (
          <button className="btn" onClick={timeStope}>
            {t("btn.stop")}
          </button>
        )}
        <button className="btn" onClick={timeReset}>
          {t("btn.reset")}
        </button>
      </div>
    </div>
  );
}

export default Timer;

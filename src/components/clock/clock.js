import React, { useState } from "react";
import i18n from "../../utilies/i18n";
import "./clock.css";
import moment from "jalali-moment";
function Clock() {
  const [isfa, setfa] = useState(false);
  const Detectfa = (lng) => {
    if (lng === "fa") setfa(true);
    else setfa(false);
  };
  i18n.on("languageChanged", (lng) => {
    Detectfa(lng);
  });

  let time = new Date().toLocaleTimeString();
  // let date = new Date().toLocaleDateString();
  const [currenttime, setTime] = useState(time);
  // const [currentdate , setDate] =useState(date);

  const update = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
    // date =  new Date().toLocaleDateString();
    // setDate(date);
  };
  setInterval(update, 1000);
  return (
    <>
      <div className="container">
        <p className={!isfa ? "none ltr" : "persianNo ltr"}>
          {moment().locale("fa").format("h:mm:ss A")}
        </p>
        <p className={isfa && "none"}>{currenttime}</p>

        <p className={!isfa ? "none" : "persianNo"}>
          {moment().locale("fa").format("YYYY/M/D")}
        </p>
        <p className={isfa && "none"}>{moment().format("YYYY/M/D")}</p>
      </div>
    </>
  );
}

export default Clock;

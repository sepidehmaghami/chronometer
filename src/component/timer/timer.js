import React from "react";
import './timer.css';
import TimerContainer from './timercontainer';
const Timer = () => {
  const {
    timer,
    timeStart,
    timeStope,
    timeReset
  } = TimerContainer(0);

  let milisec = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
  let second = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
  let minute = ("0" + Math.floor((timer / 10) % 100)).slice(-2);
  return (
    <>
        <div className="timeController">
        <div>
            <p className="timer">
              <span>{milisec}:</span>
              <span>{second}:</span>
              <span>{minute}</span>
            </p>
          </div>
          <div className="btnController">
              <button className="start" onClick={timeStart}>
                Start
              </button>
              <button className="stop" onClick={timeStope}>
                Stop
              </button>
              <button className="reset" onClick={timeReset}>
                Reset
              </button>
          </div>
        </div>
    </>
    )
};

export default Timer;
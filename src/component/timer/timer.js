import { useState } from 'react';
import './timer.css';
function Timer (){
    const [second , setSecond] =useState('00');
    const [minute, setMinute] =useState('00');
    const [hour , setHour] =useState('00');

    const timeStart =() =>{}

    const timeStop =() =>{}

    const timeReset =() =>{
        setSecond('00');
        setMinute('00');
        setHour('00');
    }

    return(
        <>
        <div className="timeController">
            <p className="timer">{hour} : {minute} : {second} </p>
            <div className="btnController">
                <button className="start" onClick={timeStart}>Start</button>
                <button className="stop" onClick={timeStop}>Stop</button>
                <button className="reset" onClick={timeReset}>Reset</button>
            </div>
        </div>
        </>
    )
};

export default Timer;
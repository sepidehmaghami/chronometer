import React , {useState}from 'react';
import './header.css';
import Clock from '../clock/clock'
import Lang from '../lang/lang';

function Header (){
    let time =  new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const [currenttime , setTime] =useState(time);
    const [currentdate , setDate] =useState(date);

    const update =()=>{
        time =  new Date().toLocaleTimeString();
        setTime(time);
        date =  new Date().toLocaleDateString();
        setDate(date);
      }
      setInterval(update , 1000);
    return(
        <>
            <div className="background">
                <Lang/>
                <Clock time={currenttime} date={currentdate}/>
            </div>
        </>
    );
}

export default Header;
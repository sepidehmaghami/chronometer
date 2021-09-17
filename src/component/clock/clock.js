import React,{useState} from 'react';
import i18n from "../../utilies/i18n";
import './clock.css'

function Clock(props) {

    const [isfa , setfa] = useState(false);
    const Detectfa = (lng) => {
      if (lng === 'fa')
         setfa(true);
      else
         setfa(false);
    }
    i18n.on('languageChanged', (lng) => {
      Detectfa(lng);
    });

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
    return (
        <>
             <div className="container">
                    <p style={{marginBottom:'1px'}} className="ltr">{currenttime}</p>
                    <p>{currentdate}</p>
               </div>
        </>
    )
};

export default Clock;
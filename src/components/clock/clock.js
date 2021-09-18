import React,{useState} from 'react';
import i18n from "../../utilies/i18n";
import './clock.css'
import moment from "jalali-moment";

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
                    <p style={{marginBottom:'1px'}} className={isfa ? "ltr  persianNo" : "ltr"}>{currenttime}</p>
                    <p className={!isfa ? "none" :"persianNo"}>
                        {moment({ currentdate }).locale("fa").format("YYYY/M/D")}
                    </p>
                    <p className={isfa && "none"}>
                        {currentdate}
                    </p>
               </div>
        </>
    )
};

export default Clock;
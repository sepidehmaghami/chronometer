import React,{useState} from 'react';
import './timer.css';
import TimerContainer from './timercontainer';
import { useTranslation } from 'react-i18next';
import i18n from "../../utilies/i18n";
import Logo from '../../assets/stopwatch.png';
function Timer () {

  const {t} = useTranslation();
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
        <div className="timeController">
          <p className={isfa ? "persianNo title":"title"}>
            <img src={Logo} alt="title" />
            {t('timer.title')}
          </p>
        <div className="timer ltr">
              <span className={isfa && "persianNo"}>{milisec}:</span>
              <span className={isfa && "persianNo"}>{second}:</span>
              <span className={isfa && "persianNo"}>{minute}</span>
          </div>
          <div className="btnController">
              <button className="start" onClick={timeStart}>
                {t('btn.start')}
              </button>
              <button className="stop" onClick={timeStope}>
                  {t('btn.stop')}
              </button>
              <button className="reset" onClick={timeReset}>
                  {t('btn.reset')}
              </button>
          </div>
        </div>
    )
};

export default Timer;
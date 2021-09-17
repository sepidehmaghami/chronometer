import React,{useState} from 'react';
import i18n from "./utilies/i18n";

import './App.css';
import Timer from './component/timer/timer';
import Header from './component/header/header';

function App() {

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

  return (
    <div className={isfa ? "rtl main" : "ltr main"} >
      <Header/>
      <Timer/>
    </div>
  );
}

export default App;

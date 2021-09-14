import './timer.css';
function Timer (){
    
    return(
        <>
        {/* <p>{} : {} : {} </p> */}
        <div className="btnController">
            <button className="start">Start</button>
            <button className="stop">Stop</button>
            <button className="reset">Reset</button>
        </div>
        </>
    )
};

export default Timer;
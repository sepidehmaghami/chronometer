import './clock.css'
function Clock(props) {
    
    return (
        <>
             <div className="container">
                    <p style={{marginBottom:'1px'}}>{props.time}</p>
                    <p>{props.date}</p>
               </div>
        </>
    )
};

export default Clock;
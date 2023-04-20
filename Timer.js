import {  useState,useRef } from "react";
import TimerCards from './TimerCards';

import data from './data';
const Timer = () => {
    const inputseconds = useRef(null);
   const [time,setTime]=useState(new Date())
   const [Data,setD]=useState(data);
   const addTimer=()=>{
    setTime(new Date());
    const ms=inputseconds.current.value;
    const inputDate=time.toLocaleDateString();
    const inputTime=time.toLocaleTimeString('it-IT');
    
    //const date=new Date();
     const data1=({
         time:inputTime,
         date:inputDate,
         seconds:ms,
      
     })
     data.push(data1);
    setD(data);
    console.log(Data)
   }
   
    return (
        <div class="container mt-5">
        <div class="row">
        <div class="col-md-6">
                <div class="card p-3">
                <TimerCards/>
                 </div>
            </div> 
            <div class="col-md-6">
                <div class="card p-3">
                <div className="timer">
                    <h3>New Timer</h3>
                        <input ref={inputseconds} type="number"/><br></br><br></br>
                        <button style={{width: "8rem"}} className="btn btn-primary" onClick={()=>addTimer()}>Add</button> 
                        </div>
                </div>
            </div>
                     
        </div>
    </div>
        
    );
};

export default Timer;
import { useState } from 'react';
import React from 'react';
import data from './data';

const TimerCards = () => {
    const [Data,setD]=useState(data);
    
    

const removeTimer=(time1)=>{
    for(let i=1;i<Data.length;i++){
    if(Data[i].time===time1)
    {
        data.pop(Data[i]);
        console.log("hi remove",data);
        setD(data);
    }
   
}
}
  return (
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                        {    
                         Data.map((list)=>(
                            <div class="card bg-dark p-3 m-3">
                                <button type="button" onClick={()=>removeTimer(list.time)} class="btn-close btn-close-white" aria-label="Close"/>
                                <h1 style={{color:'white'}}><center>{list.seconds}</center></h1>
                                <p style={{color:'white'}}><center>{list.date}&nbsp;{list.time}</center></p>
                            </div>
                            ))
                        }
                           
            </div>         
        </div>
    </div>
  )
}

export default TimerCards;

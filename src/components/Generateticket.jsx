import React, { useContext, useState } from 'react'
import { TicketContext } from './Store'
import "./generate.css"
export const Generateticket=()=>{
    const [Data, setData] = useState("")
    
    const {SetTicket,Ticket} = useContext(TicketContext)
   
      
    const handleChange = (e)=>{
        const val = e.target.value;
        if(Data.length<=5) setData(Data+val)
        else alert("Enter only 6 digits")
         console.log(Data);
       }
     
    const handleClear=()=>{
        setData("")
      }

      const addData=()=>{
        setData("")
       Ticket.length<5? SetTicket([...Ticket,Data]): alert("Limit Reached")
      }
    return(
        <div className='main-div'>
        <div className='box1'>
         <div className='box-div'>
        <div className='inputbox'>
        <div>{Data}</div>
        {/* <div>enter 6 digits</div> */}
         </div>
        <div className='left-div'>
        
        <button value="7" onClick={handleChange}>7</button>
          <button value="8" onClick={handleChange}>8</button>
          <button value="9" onClick={handleChange}>9</button>
          <button value="4" onClick={handleChange}>4</button>
          <button value="5" onClick={handleChange}>5</button>
          <button value="6" onClick={handleChange}>6</button>
          <button value="1" onClick={handleChange}>1</button>
          <button value="2" onClick={handleChange}>2</button>
          <button value="2" onClick={handleChange}>3</button>
          <button >Clear</button>
          <button value="0" onClick={handleChange}>0</button>
          <button  onClick={handleClear}>Delete</button>
          
        </div>
        <div >
             <button onClick={()=>{
                addData()
             }}  className='add' > Add Ticket</button>
           </div>
           </div>
        <div className='right-div'>
              <img src="https://i.ibb.co/5nLnCcG/crrrop.png"  alt="" height="90%" width="100%" />
        </div>
        </div>
        <div className='box2'>
         
 
            {Ticket.map((elem)=>{
             return (
                 <div  >
                      <div className='display'>{elem}</div>
               </div>
             )
           })}
  
           
        </div>
     </div>
    )
}
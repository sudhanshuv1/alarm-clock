import {useRef, useEffect} from 'react'

const Ringalarm = ({displayAlarmState,setDisplayAlarmState,setActiveAlarmState,alarmslist}) => {
  

  const displayAlarmID = useRef(false)
  const snoozeCounter=useRef(0)

  const nextSnoozeDisplay = () => {
    if(displayAlarmID.current){
      clearTimeout(displayAlarmID.current)
    }
    setDisplayAlarmState(false)
    if(snoozeCounter.current<3){
      setTimeout(() => {setDisplayAlarmState(true)},120000)
      snoozeCounter.current = snoozeCounter.current + 1
    } else {
      snoozeCounter.current=0
      setActiveAlarmState(false)
      setDisplayAlarmState(false)
    }
  }
  
  useEffect (() => {
    if(displayAlarmState){
      displayAlarmID.current = setTimeout(nextSnoozeDisplay,60000)
    } else {
      return
    }
  },[displayAlarmState])
  
 const stopThisAlarm = () => {
   for(let index=0; index<alarmslist.length; ++index){
     if(alarmslist[index].isActive){
      alarmslist[index].isActive=false
      alarmslist[index].stopAlarm()
     }
   }
   clearTimeout(displayAlarmID.current)
   setActiveAlarmState(false)
   setDisplayAlarmState(false)
 }
  
  
  return(
    <div>
      {displayAlarmState && 
        <div>
          <h1>ALARM!!</h1>
          <h4>Alarm</h4>
          <div>
              <button onClick={nextSnoozeDisplay}>Snooze</button> 
              <button onClick={stopThisAlarm}>Stop</button> 
          </div>
        </div>
      } 
    </div>
    
  )
}

export default Ringalarm
import {Alarms, Ringalarm, AddAlarm, Clock} from './components';
import { useState,useEffect,useRef,useCallback } from 'react';
import Alarm from './utils/alarmClass';
import { daysOfWeek } from './utils/daysOfWeek';

function App() {
    
  const [alarmslist, setAlarmslist] = useState(JSON.parse(localStorage.getItem('alarmsList')) || []);
  const [activeAlarmState, setActiveAlarmState] = useState(false)
  const [displayAlarmState, setDisplayAlarmState] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newAlarmTime,setNewAlarmTime] = useState('')

  

  useEffect(() => {
    localStorage.setItem('alarmsList', JSON.stringify(alarmslist));
  }, [alarmslist])

  const checkAlarmRing = useCallback(()=>{
    let d = new Date()
    let hours = d.getHours()
    let minutes = d.getMinutes()
    let todaysDay=d.getDay()
    for(let index=0; index < (alarmslist.length); ++index){
      let numberList = (alarmslist[index].alarmTime.split(':')).map((item) => parseInt(item))
      if(!alarmslist[index].isStopped && numberList[0] === hours && numberList[1] === minutes && ((alarmslist[index].days).some(day => day === daysOfWeek[todaysDay].value))){
        alarmslist[index].isActive=true
        setActiveAlarmState(true)
        setDisplayAlarmState(true)
      }
    }
  },[alarmslist])

  const checkAlarmIntervalID = useRef(null)

  const handleDelete = (id) => {
    let newAlarms = alarmslist.filter((item) => item.id !== id)
    for(let index=0; index<newAlarms.length; ++index){
      (newAlarms[index]).id=(index+1)
    }
    clearInterval(checkAlarmIntervalID.current)
    setAlarmslist(newAlarms)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newAlarmTime) return
    let thisAlarm = new Alarm()
    const id = alarmslist.length ? alarmslist[alarmslist.length - 1].id + 1 : 1
    thisAlarm.adjustID(id)
    thisAlarm.adjustTime(newAlarmTime)
    for(let i=0; i<selectedOptions.length; ++i){
      thisAlarm.days.push(selectedOptions[i].value)
    }
    const newAlarmsList = [...alarmslist,thisAlarm]
    clearInterval(checkAlarmIntervalID.current)
    setAlarmslist(newAlarmsList)
    setSelectedOptions([])
    setNewAlarmTime('')
  }
  

  useEffect(() => {
    if(!activeAlarmState){
      checkAlarmIntervalID.current = setInterval(checkAlarmRing,2000)
    }else{
      clearInterval(checkAlarmIntervalID.current)
    }

    return () => clearInterval(checkAlarmIntervalID.current)
    
  },[activeAlarmState,checkAlarmRing])
  
  
  return (
    <div>
      <h1>Alarm App</h1>
      <Clock />
      <Ringalarm
        displayAlarmState={displayAlarmState}
        setDisplayAlarmState={setDisplayAlarmState}
        setActiveAlarmState={setActiveAlarmState} 
        alarmslist={alarmslist}
      />
      <AddAlarm 
        newAlarmTime={newAlarmTime}
        setNewAlarmTime={setNewAlarmTime}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        handleSubmit={handleSubmit}
      />
      <Alarms
        alarmslist={alarmslist}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

import {useState, useEffect} from 'react'
import Time from './Time';
import AnalogClock from './AnalogClock';



const Clock = () => {

  const [currentTime,setCurrentTime]  = useState(new Date());

  const changeTime = () => {
    let d = new Date();
    setCurrentTime(d);
  }

  useEffect(()=> {
    setInterval(changeTime,500)
  },[]);
  
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
    
  return (
    
    <div className="flex flex-col items-center">
      <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
      <div className="flex text-2xl orbitron-font">
        <Time text={hours} /><p>:</p>
        <Time text={minutes} /><p>:</p>
        <Time text={seconds} />
      </div>
    </div>
  )
}

export default Clock
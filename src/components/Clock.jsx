import { useState, useEffect } from 'react';
import Time from './Time';
import AnalogClock from './AnalogClock';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const changeTime = () => {
    let d = new Date();
    setCurrentTime(d);
  };

  useEffect(() => {
    const intervalId = setInterval(changeTime, 500);
    return () => clearInterval(intervalId);
  }, []);

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="flex flex-col items-center py-8">
      <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
      <div className="flex text-2xl orbitron-font border p-2 rounded-md mt-4 bg-gray-200 text-black shadow-lg w-38 justify-center">
        <Time text={hours} /><p>:</p>
        <Time text={minutes} /><p>:</p>
        <Time text={seconds} />
      </div>
      <div className="mt-2 text-lg text-gray-600">
        {timezone}
      </div>
    </div>
  );
};

export default Clock;
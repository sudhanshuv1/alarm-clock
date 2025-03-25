import { useRef, useEffect } from 'react';

const Ringalarm = ({ displayAlarmState, setDisplayAlarmState, setActiveAlarmState, alarmslist }) => {
  const displayAlarmID = useRef(false);
  const snoozeCounter = useRef(0);

  const nextSnoozeDisplay = () => {
    if (displayAlarmID.current) {
      clearTimeout(displayAlarmID.current);
    }
    setDisplayAlarmState(false);
    if (snoozeCounter.current < 3) {
      setTimeout(() => { setDisplayAlarmState(true); }, 120000);
      snoozeCounter.current = snoozeCounter.current + 1;
    } else {
      snoozeCounter.current = 0;
      setActiveAlarmState(false);
      setDisplayAlarmState(false);
    }
  };

  useEffect(() => {
    if (displayAlarmState) {
      displayAlarmID.current = setTimeout(nextSnoozeDisplay, 60000);
    } else {
      return;
    }
  }, [displayAlarmState]);

  const stopThisAlarm = () => {
    for (let index = 0; index < alarmslist.length; ++index) {
      if (alarmslist[index].isActive) {
        alarmslist[index].isActive = false;
        alarmslist[index].stopAlarm();
      }
    }
    clearTimeout(displayAlarmID.current);
    setActiveAlarmState(false);
    setDisplayAlarmState(false);
  };

  const activeAlarm = alarmslist.find(alarm => alarm.isActive);

  return (
    <div>
      {displayAlarmState && activeAlarm &&
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col justify-between text-center w-full max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-42 md:w-42 lg:h-68 lg:w-68">
              <h1 className="text-3xl font-bold text-red-600 mb-4 animate-blink">ALARM</h1>
              <h4 className="text-2xl font-semibold mb-4">Alarm is ringing at <span className="digital7-font">{activeAlarm.alarmTime}</span></h4>
              <div className="flex justify-around mb-4">
                <button
                  onClick={nextSnoozeDisplay}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 hover:cursor-pointer"
                >
                  Snooze
                </button>
                <button
                  onClick={stopThisAlarm}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 hover:cursor-pointer"
                >
                  Stop
                </button>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Ringalarm;
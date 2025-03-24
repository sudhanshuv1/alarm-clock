import React from 'react';
import AlarmItem from './AlarmItem';

const Alarms = ({ alarmslist, handleDelete }) => {
  return (
    <ul className="space-y-4 max-h-[50vh] overflow-scroll" >
      {alarmslist.map((item) => (
        <AlarmItem 
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default Alarms;
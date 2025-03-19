import React from 'react'
import AlarmItem from './Alarmitem';

const Alarms = ({alarmslist,handleDelete}) => {
  return (
    <div>
      <ul>
        {alarmslist.map((item) => (
          <AlarmItem 
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      
    </div>
  )
}

export default Alarms
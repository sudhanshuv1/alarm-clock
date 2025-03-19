import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const AlarmItem = ({item,handleDelete}) => {
  return (
      <li>
        <p>
          {item.alarmTime},
          {item.days}
        </p>
        <button>
          <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role="button"
                    tabIndex="0"
                    aria-label={`Delete ${item.id}`}
          />
        </button>
      </li>
  )
}

export default AlarmItem
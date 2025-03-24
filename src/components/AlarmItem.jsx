import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const AlarmItem = ({ item, handleDelete }) => {
  return (
    <li className="flex justify-between items-center p-4 bg-white rounded shadow-md">
      <div>
        <p className="text-lg font-semibold">{item.alarmTime}</p>
        <div className="flex flex-wrap space-x-2 mt-2 max-h-21 overflow-y-auto">
          {item.days.map((day) => (
            <span
              key={day}
              className="px-2 py-1 mt-2 rounded text-sm font-medium bg-gray-300"
            >
              {day}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.id}`}
        className="text-red-500 hover:text-red-700 hover:cursor-pointer"
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default AlarmItem;
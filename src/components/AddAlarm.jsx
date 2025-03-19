import React, { useRef } from 'react';
import { daysOfWeek } from '../utils/daysOfWeek';
import { FaPlus } from 'react-icons/fa';
import Select from 'react-select';
import TimePicker from 'react-time-picker';

const AddAlarm = ({ newAlarmTime, setNewAlarmTime, setSelectedOptions, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto'>
      <h2 className='text-xl font-bold mb-4'>Set an Alarm</h2>
      <form className='flex flex-row space-x-4 items-center' onSubmit={handleSubmit}>
        <TimePicker
          onChange={setNewAlarmTime}
          value={newAlarmTime}
          disableClock={true}
          required
          className='border border-gray-300 rounded p-2 w-42'
        />
        <Select
          options={daysOfWeek}
          onChange={setSelectedOptions}
          isMulti
          required
          className='flex-grow border border-gray-300 rounded w-48'
          classNamePrefix='react-select'
        />
        <button
          id='submit-button'
          type='submit'
          aria-label='Add Alarm'
          onClick={() => inputRef.current.focus()}
          className='flex items-center justify-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddAlarm;
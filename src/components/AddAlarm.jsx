import React from 'react';
import { daysOfWeek } from '../utils/daysOfWeek';
import { FaPlus } from 'react-icons/fa';
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const AddAlarm = ({ newAlarmTime, setNewAlarmTime, setSelectedOptions, handleSubmit }) => {
  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto'>
      <h2 className='text-xl font-bold mb-4 text-center'>Set an Alarm</h2>
      <form className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center' onSubmit={handleSubmit}>
        <TimePicker
          onChange={setNewAlarmTime}
          value={newAlarmTime}
          disableClock={true}
          required
          placeholder='Select time'
          className='border border-gray-300 rounded p-2 w-full sm:w-42 hover:cursor-pointer'
        />
        <Select
          options={daysOfWeek}
          onChange={setSelectedOptions}
          isMulti
          required
          placeholder='Select days'
          className='flex-grow border border-gray-300 rounded w-full sm:w-48 hover:cursor-pointer overflow:scroll'
          classNamePrefix='react-select'
        />
        <button
          id='submit-button'
          type='submit'
          aria-label='Add Alarm'
          className='flex items-center justify-center p-2 bg-blue-500 text-white hover:cursor-pointer rounded hover:bg-blue-600 w-full sm:w-auto'
        >
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddAlarm;
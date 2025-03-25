import React, { useState } from 'react';
import { daysOfWeek } from '../utils/daysOfWeek';
import { FaPlus } from 'react-icons/fa';
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const AddAlarm = ({ newAlarmTime, setNewAlarmTime, setSelectedOptions, handleSubmit }) => {
  const [key, setKey] = useState(0);

  const clearFormAndSubmit = (e) => {
    handleSubmit(e);
    setKey(prevKey => prevKey + 1);
  };

  return (
    <section className='flex flex-col items-center space-y-4'>
      <h2 className='text-xl font-bold mb-4 text-center'>Set an Alarm</h2>
      <form key={key} className='flex flex-col sm:flex-row space-y-4 mb-8 sm:space-y-0 sm:space-x-4 items-center' onSubmit={clearFormAndSubmit}>
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
          className='flex-grow border border-gray-300 rounded w-full sm:w-48 hover:cursor-pointer'
          classNamePrefix='react-select'
        />
        <button
          id='submit-button'
          type='submit'
          aria-label='Add Alarm'
          className='flex items-center justify-center p-2 bg-green-600 text-white hover:cursor-pointer rounded hover:bg-green-700 w-full sm:w-auto'
        >
          <FaPlus />
        </button>
      </form>
    </section>
  );
};

export default AddAlarm;
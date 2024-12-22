import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      
      <DatePicker 
        selected={selectedDate} 
        onChange={handleDateChange} 
        dateFormat="dd/MM/yyyy" 
        placeholderText="Выберите дату"
      />
    </div>
  );
};

export default Calendar;

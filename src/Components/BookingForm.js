// src/components/BookingForm.js
import { useSelector, useDispatch } from "react-redux";
import { selectDate, selectTimeSlot } from "../Reducers/booking/action";
import { useState } from "react";

import React, { useContext } from "react";
import MovieHero from "../Components/MovieHero";
import { Link } from "react-router-dom";

const BookingForm = () => {
 
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.booking?.selectedDate);
  const selectedTimeSlot = useSelector(
    (state) => state.booking?.selectedTimeSlot
  );

  const [selDate, setSelDate] = useState('');
  const [selTime, setSelTime] = useState('');

  // Get the current date
  const currentDate = new Date();

  // Calculate dates for tomorrow and the day after tomorrow
  const tomorrowDate = new Date();
  tomorrowDate.setDate(currentDate.getDate() + 1);

  const dayAfterTomorrowDate = new Date();
  dayAfterTomorrowDate.setDate(currentDate.getDate() + 2);

  // Format dates as 'YYYY-MM-DD'
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  const dates = [
    formatDate(currentDate),
    formatDate(tomorrowDate),
    formatDate(dayAfterTomorrowDate),
  ];

  const timeSlots = ["6:00 PM", "9:00 PM", "12:00 PM"]; // Replace with your time slot data

  const handleDateChange = (date) => {
    setSelDate(date);
    dispatch(selectDate(date));
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelTime(timeSlot);
    dispatch(selectTimeSlot(timeSlot));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      
      <MovieHero />
      <div className="w-8/12 mx-auto bg-red-100 text-center items-center">
        <h2 className="text-2xl mt-4 p-4 font-bold mb-4">
          Select Date and Time Slot
        </h2>
        <div className="mb-4">
          <label className="block m-4 p-4 text-lg text-gray-700 text-sm font-bold mb-2">
            Select Date:
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => handleDateChange(e.target.value)}
            value={selectedDate}
          >
            <option value="">Select Date</option>
            {dates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block p-4 m-4 text-lg text-gray-700 text-sm font-bold mb-2">
            Select Time Slot:
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => handleTimeSlotChange(e.target.value)}
            value={selectedTimeSlot}
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((timeSlot, index) => (
              <option key={index} value={timeSlot}>
                {timeSlot}
              </option>
            ))}
          </select>
        </div>
        <div className="m-4 p-4">
          <p className="text-lg m-4 p-4 font-semibold">
            Selected Date: {selDate}
            <span className=" p-2 bg-blue-600">{selectedDate}</span>
          </p>
          <p className="text-lg  m-4 p-4 font-semibold">
            Selected Time Slot: {selTime}
            <span className="p-2 bg-blue-600">{selectedTimeSlot}</span>
          </p>
<Link to ="/bookseat">
          <button
            
            className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
          >
            Book Tickets(Rs.399)
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
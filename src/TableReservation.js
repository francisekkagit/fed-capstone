import React, { useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import BookingForm from './components/BookingForm';

const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  // For now, return the same times regardless of date
  return initializeTimes();
};

const TableReservation = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
      <>
          <Helmet>
              <title>Table Reservation | Little Lemon</title>
              <meta name='description' content='Little Lemon Restaurant Table Reservation' />
          </Helmet>
          <div className='tableres-hero'>
              <div className='tableres-hero-info'>
                  <h1>Reserve a Table</h1>
                  <h2>Little Lemon</h2>
              </div>
          </div>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </>
  );
};

export default TableReservation;
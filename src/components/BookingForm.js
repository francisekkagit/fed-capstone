import React, { useState } from 'react';

const BookingForm = ({availableTimes}) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
        console.log("submitted");
        setSubmitted(true);

    }

  return (
    <div className='tableres-form-container'>
        <form className='tableres-form' onSubmit={handleSubmit}>
        <div className='tableres-form-entry'>
            <label htmlFor='name'>Name for Reservation</label>
            <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>

        <div className='tableres-form-entry'>
            <label htmlFor='date'>Date</label>
            <input type='date' id='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} required/>
        </div>

        <div className='tableres-form-entry'>
            <label htmlFor='time'>Time</label>
            <select id='time' value={time} onChange={(e) => setTime(e.target.value)} required>
                {availableTimes.map(atime => (
                    <option value={atime}>{atime}</option>
                ))}
            </select>
        </div>

        <div className='tableres-form-entry'>
            <label htmlFor='guests'>Number of Guests</label>
            <input type='number' id='guests' placeholder='1' min={1} max={10} value={guests} onChange={(e) => setGuests(Number(e.target.value))} required/>
        </div>

        <div className='tableres-form-entry'>
            <label htmlFor='occasion'>Occasion</label>
            <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            </select>
        </div>

        <button type='submit' className='primary-btn'>Submit</button>
        </form>

        {submitted && <div className='form-submitted'>✅ Form was submitted</div>}
    </div>
  )
}

export default BookingForm
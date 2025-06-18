import React from 'react'

export default function Booking() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked")
  }
  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='bg-cyan-100/30 rounded-lg w-90 p-6 flex flex-col gap-4'>
        <select name="doctor" id="doctor" className='border border-black/30 px-2 py-1 rounded-lg'>
          <option>
            Dr. Rohit
          </option>
          <option selected>
            Dr. Aditya
          </option>
          <option>
            Dr. Tarun
          </option>
        </select>
        <input type="date" className='border border-black/30 px-2 py-1 rounded-lg' required />
        <input type="time" className='border border-black/30 px-2 py-1 rounded-lg' required />
        <button type="submit" className='bg-cyan-400/70 rounded-lg py-1'>
          Book Appointment
        </button>
      </form>
    </div>
  )
}

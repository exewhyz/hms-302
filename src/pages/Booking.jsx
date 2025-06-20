import React, { useState } from 'react'
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function Booking() {

  const redirect = useNavigate();
  const { addAppointment } = useData();

  const [appointmentData, setAppointmentData] = useState({
    doctor: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setAppointmentData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAppointment(appointmentData);
      setAppointmentData({
        doctor: "",
        date: "",
        time: ""
      })
      redirect("/");
    } catch (error) {
      console.log("Error Booking Appointmnt: " + error);
      throw new Error("Error Booking Appointmnt: ", error)
    }
  }
  return (
    <div className='flex items-center justify-center h-full'>
      <form onSubmit={handleSubmit} className='bg-cyan-100/30 rounded-lg w-90 p-6 flex flex-col gap-4'>
        <select onChange={handleChange} name="doctor" value={appointmentData.doctor} id="doctor" className='border border-black/30 px-2 py-1 rounded-lg'>
          <option value="Dr. Rohit">
            Dr. Rohit
          </option>
          <option selected value="Dr. Aditya">
            Dr. Aditya
          </option>
          <option value="Dr. Tarun">
            Dr. Tarun
          </option>
        </select>
        <input onChange={handleChange} name="date" value={appointmentData.date} type="date" className='border border-black/30 px-2 py-1 rounded-lg' required />
        <input onChange={handleChange} name="time" value={appointmentData.time} type="time" className='border border-black/30 px-2 py-1 rounded-lg' required />
        <button type="submit" className='bg-cyan-400/70 rounded-lg py-1'>
          Book Appointment
        </button>
      </form>
    </div>
  )
}

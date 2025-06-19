import React from 'react'
import Table from '../components/Table'

export default function Home() {

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Aditya",
      date: "2025-06-16",
      time: "10:56:10"
    },
    {
      id: 2,
      doctor: "Dr. Tarun",
      date: "2025-06-26",
      time: "10:56:10"
    },
    {
      id: 3,
      doctor: "Dr. Rohit",
      date: "2025-06-26",
      time: "11:58:10"
    }
  ]

  const upcommingAppointments = appointments.filter((app) => new Date(app.date) > Date.now())
  const pastAppointments = appointments.filter((app) => new Date(app.date) < Date.now())
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <h1 className='font-bold text-4xl'>Upcomming Appointments</h1>
        <div className='flex gap-4 p-6'>
          {
            upcommingAppointments.map((app) => {
              return (
                <Table key={app.id} id={app.id} doctor={app.doctor} date={app.date} time={app.time} />
              )
            })
          }
        </div>
      </div>
      <div>
        <h1 className='font-bold text-4xl'>Past Appointments</h1>
        <div className='flex gap-4 p-6'>
          {
            pastAppointments.map((app) => {
              return (
                <Table key={app.id} id={app.id} doctor={app.doctor} date={app.date} time={app.time} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
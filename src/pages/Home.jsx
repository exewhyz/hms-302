import React from 'react'
import Table from '../components/Table'
import { useData } from '../context/DataContext'

export default function Home() {

  const { appointments } = useData();

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
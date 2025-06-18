import React from 'react'

export default function Table({ id, doctor, date, time }) {
    return (
        <div className='flex flex-col items-center justify-center cursor-pointer gap-4 bg-amber-100 h-60 w-60 rounded-xl p-6'>
            <h2 className='font-bold text-2xl text-blue-500'>{doctor}</h2>
            <p className='font-semibold'>Date: {date}</p>
            <p className='font-semibold'>Time: {time}</p>
        </div>
    )
}

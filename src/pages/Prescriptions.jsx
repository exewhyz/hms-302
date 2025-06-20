import React from 'react'
import { useData } from '../context/DataContext'

export default function Prescriptions() {
    const { prescriptions } = useData();
    return (
        <div>
            <h1 className='font-bold text-4xl'>Prescriptions</h1>
            <div className='flex gap-6 flex-col p-2 mt-4'>
                {
                    prescriptions.length > 0 ? prescriptions.map((pres) => {
                        return (
                            <div className='flex gap-4 bg-emerald-100 p-2 rounded'>
                                <p> <span className='font-semibold'>Doctor:</span> {pres.doctor}</p>
                                <p> <span className='font-semibold'>Details:</span> {pres.details}</p>
                            </div>
                        )
                    }) : (
                        <div>No Prescriptions Found</div>
                    )
                }
            </div>
        </div>
    )
}

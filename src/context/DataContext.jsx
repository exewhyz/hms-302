import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const appointmentsData = [
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

const prescriptionsData = [
    {
        id: 1,
        dcotor: "Dr. Aditya",
        details: "ugduifher"
    },
    {
        id: 2,
        dcotor: "Dr. Aditya",
        details: "ugfoilref0e"
    }
]



export const DataProvider = ({ children }) => {

    const [appointments, setAppointments] = useState(appointmentsData);
    const [precsriptions, setPrecsriptions] = useState(prescriptionsData);
    const [dataLoading, setDataLoading] = useState(false);
    const [dataError, setDataError] = useState(null);


    const addAppointment = async (appt) => {
        try {
            setDataLoading(true);
            setDataError(null);
            //api call with appt obj
            const newAppt = {
                id: Date.now(),
                ...appt
            }
            setAppointments((prev) => {
                return [
                    ...prev,
                    newAppt
                ]
            })
        } catch (error) {
            setDataError("Appointment Booking failed: " + error.message)
            throw new Error("Appointment Booking failed: ", error)
        } finally {
            setDataLoading(false);
        }
    }
    return (
        <DataContext.Provider value={{ dataLoading, dataError, appointments, precsriptions, addAppointment }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);
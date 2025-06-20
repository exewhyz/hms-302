import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [appointments, setAppointments] = useState([]);
    const [precsriptions, setPrecsriptions] = useState([]);
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

export const UseData = () => useContext(DataContext);
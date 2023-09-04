import { useState,createContext } from "react";


export const dataCreateTrip = createContext()

const initalData = {
    scheduleDay: "",
    weightAvg: "",
    customer: "",
    truck: "",
}

export function CreateTrip({ children }) {
    const [dataTrip, setDataTrip] = useState(initalData)

    function addValueToKey(key, value) {
        setDataTrip({
            ...dataTrip,
            [key]: value
        })
    }

    const values = {
        addValueToKey,
        dataTrip
    }

    return (
        <dataCreateTrip.Provider value={values}>
            {children}
        </dataCreateTrip.Provider>
    )
}
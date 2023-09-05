import { useState, createContext } from "react";
import { useConsult } from "../hooks/useConsult";


export const dataCreateTrip = createContext()

const initalData = {
    scheduleDay: "",
    weightAvg: "",
    customer: "",
    truck: "",
    address:""
}

export function CreateTrip({ children }) {
    const [dataTrip, setDataTrip] = useState(initalData)
    const { dataConsult,errorsConsult,loading,
        fecthingData } = useConsult("trip-create","POST",dataTrip)


    function addValueToKey(key, value) {
        setDataTrip({
            ...dataTrip,
            [key]: value
        })
    }

    function resetDataSelected(value) {
        if (dataTrip.customer !== "") {
            setDataTrip({
                ...dataTrip,
                scheduleDay: value,
                customer: "",
                truck: "",
            })
        }
    }


    const values = {
        addValueToKey,
        resetDataSelected,
        dataTrip,
        consult : fecthingData,
        loadingCreate:loading,
        errorsCreate :errorsConsult
    }

    return (
        <dataCreateTrip.Provider value={values}>
            {children}
        </dataCreateTrip.Provider>
    )
}
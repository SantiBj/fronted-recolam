import { useContext, useEffect } from "react"
import { dataCreateTrip } from "../../context/CreateTrip"
import { Link, Navigate } from "react-router-dom"
import { useConsult } from "../../hooks/useConsult"

export function Truck() {
    const { addValueToKey, dataTrip } = useContext(dataCreateTrip)
    const { dataConsult, errorsConsult, loading, fecthingData } = useConsult(`trucks-available-date?date=${dataTrip.scheduleDay}`)

    useEffect(() => {
        fecthingData()
    }, [])

    function addTruck(e) {
        const value = e.target.value
        const name = e.target.name
        addValueToKey(name, value)
    }

    if (dataTrip.customer === "") {
        return <Navigate to="/create-trip/customer" />
    }
    if (loading) {
        return <h1>loading ...</h1>
    }
    return (
        <div>
            {
                dataConsult.map((truck) => (
                    <label className={`border-2 ${dataTrip.truck === truck.placa ? "border-green-500" : "border-black"}`} key={truck.placa} htmlFor={truck.placa}>
                        <input onClick={addTruck} type="radio" name="truck" id={truck.placa} value={truck.placa} />
                        {truck.placa}
                    </label>
                ))
            }
            <Link to={"/create-trip/confirmation"} className={`bg-blue-500 p-[3px] ${dataTrip.truck == "" ? "opacity-60 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
                continuar
            </Link>
        </div>
    )
}
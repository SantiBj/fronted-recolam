import { useContext, useEffect, useState } from "react"
import { useConsult } from "../../hooks/useConsult"
import { dataCreateTrip } from "../../context/CreateTrip"
import { Link, Navigate } from "react-router-dom"

export function Customer() {
    const { dataTrip, addValueToKey } = useContext(dataCreateTrip)
    const { dataConsult, errorsConsult, loading, fecthingData } = useConsult("customers")
    //ver cuantos pedidos puede tener un cliente
    useEffect(() => {
        fecthingData()
    }, [])

    function addCustomTrip(e) {
        const value = e.target.value
        const nameInput = e.target.name
        addValueToKey(nameInput, value)
    }

    if (dataTrip.scheduleDay == "" || dataTrip.weightAvg == "") {
        return <Navigate to={"/create-trip/scheduleDay"} />
    }
    if (loading) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            {
                dataConsult.results.map((customer) => (
                    <label key={customer.id} className={`border-2 ${dataTrip.customer === customer.id ? "border-green-500" : "border-black"}`} htmlFor={customer.id}>
                        <input onChange={addCustomTrip} type="radio" name="customer" value={customer.id} id={customer.id} />
                        {customer.name}
                    </label>
                ))
            }
            <Link to={"/create-trip/truck"} className={`border-2 bg-blue-400 p-[3px] ${dataTrip.customer === "" ? "opacity-60 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
                continuar
            </Link>
        </div>
    )
}
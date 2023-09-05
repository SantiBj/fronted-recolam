import { useContext, useEffect, useState } from "react"
import { dataCreateTrip } from "../../context/CreateTrip"
import { Link, Navigate } from "react-router-dom"
import { useConsult } from "../../hooks/useConsult"

export function Confirmation() {
    const { addValueToKey, dataTrip,consult,loadingCreate,errorsCreate } = useContext(dataCreateTrip)
    const { dataConsult, errorsConsult, loading, fecthingData } = useConsult("customer-address/" + dataTrip.customer)
    const [address, setAddress] = useState(dataTrip.address)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        fecthingData()
    }, [])

    useEffect(() => {
        if (dataConsult !== null) {
            addValueToKey("address", dataConsult.address)
            setAddress(dataConsult.address)
        }
    }, [dataConsult])


    if (dataTrip.truck === "") {
        return <Navigate to="/create-trip/truck" />
    }

    function addAddress(e) {
        const value = e.target.value
        setAddress(value)
        if (value.trim() !== "") {
            if (value.length > 5) {
                addValueToKey("address", value)
                if (errors !== null) {
                    setErrors(null)
                }
            } else {
                if (dataTrip.address !== "") {
                    addValueToKey("address", "")
                }
                setErrors("El campo debe contener minimo 5 caracteres")
            }
        } else {
            if (dataTrip.address !== "") {
                addValueToKey("address", "")
            }
            setErrors("El campo es requerido")
        }
    }




    if (loading) {
        return <h1>loading...</h1>
    }
    return (
        <>

            <div className="flex flex-col gap-[10px]">
                <Link className="border-gray-700 border-2" to="/create-trip/scheduleDay">Dia del viaje {dataTrip.scheduleDay}</Link>
                <Link className="border-gray-700 border-2" to="/create-trip/scheduleDay">Peso estimado en Kg {dataTrip.weightAvg}</Link>
                <Link className="border-gray-700 border-2" to="/create-trip/customer">Cliente {dataTrip.customer}</Link>
                <Link className="border-gray-700 border-2" to="/create-trip/truck">Camión {dataTrip.truck}</Link>
            </div>

            <label>
                Direccion :
                <input onChange={addAddress} name="address" className="border-2 border-black" type="text" value={address} />
                <div>
                    {
                        errors != null && <h3>{errors}</h3>
                    }
                </div>
            </label>

            <button onClick={consult} className={`bg-green-400 ${dataTrip.address === "" ? "opacity-60 pointer-events-none" : "opacity-100 pointer-events-auto"} py-[8px] px-[12px]`}>
                crear viaje
            </button>
        </>
    )
}
import { useContext, useState } from "react"
import { dataCreateTrip } from "../context/CreateTrip"
import moment from "moment"


export function ScheduleDay() {
    const { addValueToKey, dataTrip } = useContext(dataCreateTrip)
    const [errors, setErrors] = useState({
        scheduleDay: null,
        weightAvg: null
    })

    function addError(name, value) {
        setErrors({
            ...errors,
            [name]: value
        })
    }

    function handlerChange(e) {
        const nameInput = e.target.name
        const value = e.target.value
        if (nameInput == "scheduleDay") {
            // validar que la fecha sea mayor a hoy
            if (value.trim() == ""){
                addError(nameInput, "la fecha es requeridad")
            }
            const dateClient = moment(value).format('YYYY-MM-DD')
            const today = moment().format('YYYY-MM-DD')
            console.log(typeof value)
            if (dateClient >= today) {
                if (errors.scheduleDay !== null) {
                    addError(nameInput, null)
                }
                addValueToKey(nameInput, value)
            } else {
                if (dataTrip.scheduleDay !== null) {
                    addValueToKey(nameInput, "")
                }
                addError(nameInput, "La fecha debe ser mayor o igual a hoy")
            }
        } else if (nameInput == "weightAvg") {
            console.log(value)
            if (parseInt(value) > 0 && value.trim() != "") {
                if (errors.weightAvg !== null) {
                    addError(nameInput, null)
                }
                addValueToKey(nameInput, parseFloat(value))
            } else {
                if (dataTrip.weightAvg !== "") {
                    addValueToKey(nameInput, "")
                }
                addError(nameInput, "La capacidad debe ser mayor de o kg")
            }
        }
    }

    // validar que la fecha ingresada este disponible en el dia ingresado

    return (
        <div>
            <div>
                <input type="date" onChange={handlerChange} name="scheduleDay" value={dataTrip.scheduleDay} />
                {
                    errors.scheduleDay !== null && <div>{errors.scheduleDay}</div>
                }
            </div>
            <div>
                <input type="number" onChange={handlerChange} name="weightAvg" value={dataTrip.weightAvg} />
                {
                    errors.weightAvg !== null && <div>{errors.weightAvg}</div>
                }
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { dataCreateTrip } from "../../context/CreateTrip"
import moment from "moment"
import { URL_API } from "../../config"


export function ScheduleDay() {
    const { addValueToKey, dataTrip,resetDataSelected } = useContext(dataCreateTrip)
    const [valueInputs, setValueInputs] = useState({
        scheduleDay: dataTrip.scheduleDay,
        weightAvg: dataTrip.weightAvg
    })
    const [errors, setErrors] = useState({
        scheduleDay: null,
        weightAvg: null
    })

    function addValueInputs(key, value) {
        setValueInputs({
            ...valueInputs,
            [key]: value
        })
    }

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
            const dateClient = moment(value).format('YYYY-MM-DD')
            const today = moment().format('YYYY-MM-DD')
            if (value.trim() == "") {
                if (dataTrip.scheduleDay !== "") {
                    addValueToKey(nameInput, "")
                }
                addError(nameInput, "la fecha es requeridad")
            } else if (dateClient >= today) {
                addError(nameInput, null)
                addValueToKey(nameInput, value)
                resetDataSelected(value)
            } else {
                if (dataTrip.scheduleDay !== "") {
                    addValueToKey(nameInput, "")
                }
                addError(nameInput, "La fecha debe ser mayor o igual a hoy")
            }
            addValueInputs(nameInput, value)
        } else if (nameInput == "weightAvg") {
            if (value.trim() === "") {
                if (dataTrip.weightAvg !== "") {
                    addValueToKey(nameInput, "")
                }
                addError(nameInput, "El campo es requerido")
            } else if (parseInt(value) > 0) {
                addError(nameInput, null)
                addValueToKey(nameInput, value)
            } else {
                if (dataTrip.weightAvg !== "") {
                    addValueToKey(nameInput, "")
                }
                addError(nameInput, "La capacidad debe ser mayor de 0 kg")
            }
            addValueInputs(nameInput, parseFloat(value))
        }
    }

    async function consult(date, errors) {
        if (errors.scheduleDay == null && date !== "") {
            try {
                const response = await fetch(URL_API + "trip-available-date/" + date, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        Authorization: "Token 137b997563e98f91956a9779d5a15ea4f852a8f1",
                    }
                })
                if (!response.ok) {
                    throw new Error(response.status)
                }
                const data = await response.json()
                if (!data.avaliable) {
                    addError("scheduleDay", "La fecha seleccionada se encuentra ocupada")
                } else {
                    addError("scheduleDay", null)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
    }


    // validar que la fecha ingresada este disponible en el dia ingresado


    return (
        <div>
            <div>
                <input className="border-2 border-black" type="date" onBlur={() => consult(dataTrip.scheduleDay, errors)} onChange={handlerChange} name="scheduleDay" value={valueInputs.scheduleDay} required />
                {
                    errors.scheduleDay !== null && <div>{errors.scheduleDay}</div>
                }
            </div>
            <div>
                <input className="border-2 border-black" type="number" onChange={handlerChange} name="weightAvg" value={valueInputs.weightAvg} required />
                {
                    errors.weightAvg !== null && <div>{errors.weightAvg}</div>
                }
            </div>

            <Link to={"/create-trip/customer"} className={`border-2 border-blue-500 bg-blue-400 ${dataTrip.scheduleDay == "" || dataTrip.weightAvg == "" ? " opacity-60 pointer-events-none " : " opacity-100  pointer-events-auto "}`}>
                continuar
            </Link>
        </div>
    )
}
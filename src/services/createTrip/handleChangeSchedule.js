import moment from "moment"
import { isSunday } from "./isSunday"


export function handleChangeSchedule(e, addValueToKey, resetDataSelected, addValueInputs, addError, dataTrip) {
    const nameInput = e.target.name
    const value = e.target.value
    const dateClient = moment(value).format('YYYY-MM-DD')
    const today = moment().format('YYYY-MM-DD')
    if (value.trim() == "") {
        if (dataTrip.scheduleDay !== "") {
            addValueToKey(nameInput, "")
        }
        addError(nameInput, "la fecha es requeridad")
    } else if (dateClient >= today) {
        console.log(isSunday(value))
        if (!isSunday(value)) {
            addError(nameInput, null)
            addValueToKey(nameInput, value)
            resetDataSelected(value)
        } else {
            addError(nameInput, "La fecha seleccionada es un domingo")
            if (dataTrip.scheduleDay !== "") {
                addValueToKey(nameInput, "")
            }
        }
    } else {
        if (dataTrip.scheduleDay !== "") {
            addValueToKey(nameInput, "")
        }
        addError(nameInput, "La fecha debe ser mayor o igual a hoy")
    }
    addValueInputs(nameInput, value)
}
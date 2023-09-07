import { consultAvailableDate } from "./consultAvailableDate"

export function handleChangeSchedule(e, addValueToKey, resetDataSelected, addValueInputs, addError, dataTrip) {
    const nameInput = e.target.name
    const value = e.target.value
    if (value.trim() == "") {
        if (dataTrip.scheduleDay !== "") {
            addValueToKey(nameInput, "")
        }
        addError(nameInput, "la fecha es requeridad")
    } else {
        addValueToKey(nameInput, value)
        addError(nameInput,null)
        //vaciar los otros campos si ya tenian data y se cambio la fecha
        resetDataSelected(value)
        consultAvailableDate(addError,value,addValueToKey)
    }
    addValueInputs(nameInput, value)
}
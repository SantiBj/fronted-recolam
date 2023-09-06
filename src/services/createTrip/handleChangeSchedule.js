import moment from "moment"


export function handleChangeSchedule(e,addValueToKey,resetDataSelected,addValueInputs,addError,dataTrip){
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
export function addAddress( e, addValueToKey, addValueInputs, addError,errors,dataTrip ) {
    const value = e.target.value;
    addValueInputs(null, value)
    if (value.trim() !== "") {
        if (value.length > 5) {
            addValueToKey("address", value);
            if (errors !== null) {
                addError(null, null);
            }
        } else {
            if (dataTrip.address !== "") {
                addValueToKey("address", "");
            }
            addError(null, "El campo debe contener minimo 5 caracteres");
        }
    } else {
        if (dataTrip.address !== "") {
            addValueToKey("address", "");
        }
        addError(null, "El campo es requerido");
    }
}
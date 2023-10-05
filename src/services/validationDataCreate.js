export function validationDataCreate(name, value, role, addError, errorsInput) {
    value = value.trim()
    switch (name) {
        case "id":
            const regexAdminAndCustomer = /^\d{6,10}$/;
            const regexTruck = /^[a-zA-Z]{3}\d{3}$/;

            if (value == "") {
                addError(name, "El numero de identificacion es requerido");
            } else if (
                role == "truck" ? !regexTruck.test(value) : !regexAdminAndCustomer.test(value)
            ) {
                if (role == "truck") {
                    addError(
                        name,
                        "La placa debe ser de 6 digitos y las letras deben ser mayusculas"
                    );
                } else {
                    addError(
                        name,
                        "El campo debe ser numerico y debe contener entre 6 y 10 digitos"
                    );
                }
            } else {
                if (errorsInput[name] !== null && errorsInput[name] !== "") {
                    addError(name, "");
                }
            }
            break;
        case "name":
            const regexName = /^[a-zA-Z\s]{4,40}$/;
            if (value == "") {
                addError(name, "El nombre es requerido");
            } else if (!regexName.test(value)) {
                addError(
                    name,
                    "El nombre deber ser minimo de 3 caracteres, maximo de 40 y solo letras"
                );
            } else {
                if (errorsInput[name] !== null && errorsInput[name] !== "") {
                    addError(name, "");
                }
            }
            break;
        case "address":
            const regexAddress = "";
            if (value == "") {
                addError(name, "La direccion es requeridad");
            } else {
                if (errorsInput[name] == null){
                    addError(name, "")
                }else if (errorsInput[name] !== "") {
                    addError(name, "");
                }
            }
            break;
        case "numberPhone":
            const regexPhone = /^\d{7,10}$/;
            if (value == "") {
                addError("El numero de telefono es requerido");
            } else if (!regexPhone.test(value)) {
                addError(
                    name,
                    "El campo requiere solo numero y un rango de valores de entre 7 y 10."
                );
            } else {
                if (errorsInput[name] !== null && errorsInput[name] !== "") {
                    addError(name, "");
                }
            }
            break;
    }
}
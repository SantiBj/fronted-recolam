import { useStateInput } from "../createTrip/useStateInput";
import { useEffect } from "react";
import { consultDate } from "../../services/editTrip/ConsultDate";

const initialErrors = {
  address: null,
  scheduleDay: null,
  truck: null,
};

export function useValidationInputs(dataConsult) {
  const { inputs, errorsInput, addValueInputs, setInputs, addError } =
    useStateInput(
      {
        address: "",
        scheduleDay: "",
      },
      initialErrors
    );

  useEffect(() => {
    if (dataConsult !== null) {
      setInputs({
        scheduleDay: dataConsult.scheduleDay,
        address: dataConsult.address,
      });
    }
  }, [dataConsult]);

  async function handleChange(e) {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    if (nameInput === "address") {
      if (valueInput.trim() == "") {
        addError("address", "La Direccion del viaje el requeridad");
      } else if (valueInput.trim().length < 5) {
        addError("address", "Escriba una direccion validad");
      } else {
        if (errorsInput.address !== null) {
          addError("address", null);
        }
      }
    } else {
      if (valueInput.trim() == "") {
        addError("scheduleDay", "La fecha es requeridad");
      } else {
        if (valueInput !== dataConsult.scheduleDay) {
          consultDate(addError, valueInput);
        } else {
          if (inputs.scheduleDay !== null) {
            addError("scheduleDay", null);
          }
        }
      }
    }
    addValueInputs(nameInput, valueInput);
  }

  return {
    handleChange,
    inputs,
    addValueInputs,
    errorsInput,
    addError,
  };
}

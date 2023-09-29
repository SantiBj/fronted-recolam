import { useConsult } from "../useConsult";
import { useEffect } from "react";


export function useTruckAvailable(dataConsult,inputs,errorsInput,addError) {
    const {
      dataConsult: truckIsAvailableInDate,
      errorMessage: msg,
      errorsConsult: err,
      fecthingData: consult,
      loading: load,
    } = useConsult(`truck-available/${inputs.scheduleDay}/${dataConsult?.truck}`);

    useEffect(() => {
      if (
        dataConsult !== null &&
        inputs.scheduleDay !== dataConsult?.scheduleDay &&
        errorsInput.scheduleDay == null
      ) {
        consult();
      } else {
        if (errorsInput.truck !== null) {
          console.log("");
          addError("truck", null);
        }
      }
    }, [inputs.scheduleDay]);
    
    useEffect(() => {
      if (truckIsAvailableInDate == false) {
        addError(
          "truck",
          `El camion ${dataConsult.truck} tiene el cupo completo en la fecha seleccionada`
        );
      } else if (errorsInput.truck !== null) {
        addError("truck", null);
      }
    }, [truckIsAvailableInDate]);

    return {
      truckIsAvailableInDate,
      load,
      msg,
      err
    }
  }
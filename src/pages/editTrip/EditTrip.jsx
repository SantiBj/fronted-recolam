import { useParams } from "react-router-dom";
import { decrypt } from "../../services/encryptData";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { useEffect } from "react";
import { useValidationInputs } from "../../hooks/editTrip/useValidationInputs";
import { ContentInputs } from "../../components/editTrip/ContentInputs";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { useModal } from "../../hooks/useModal";

export function EditTrip() {
  const { trip } = useParams();
  const tripDecrypt = decrypt(trip);
  const { modal, openModal, closeModal } = useModal();
  const { dataConsult, errorMessage, errorsConsult, fecthingData, loading } =
    useConsult(`trip/${tripDecrypt}`);

  const { handleChange, inputs, errorsInput, addError } =
    useValidationInputs(dataConsult);

  useEffect(() => {
    fecthingData();
  }, []);

  //consultar disponiblidad del camion en la fecha seleccionada
  const {
    dataConsult: truckIsAvailableInDate,
    errorMessage: msg,
    errorsConsult: err,
    fecthingData: consult,
    loading: load,
  } = useConsult(`truck-available/${inputs.scheduleDay}/${dataConsult?.truck}`);

  useEffect(() => {
    if (
      inputs.scheduleDay !== dataConsult?.scheduleDay &&
      errorsInput.scheduleDay == null
    ) {
      consult();
    } else {
      if (errorsInput.truck !== null) {
        addError("truck", null);
      }
    }

    if (errorsInput.scheduleDay !== null) {
      addError("truck", null);
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
  //consultar disponiblidad del camion en la fecha seleccionada

  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }

  /// url si todo sale bien http://localhost:5173/#/trips

  return (
    <article className="flex flex-col gap-[10px]">
      <ModalGeneric isOpen={modal} content={<h1>HHH</h1>} />
      <ContentInputs
        dataConsult={dataConsult}
        handleChange={handleChange}
        inputs={inputs}
        errorsInput={errorsInput}
        trickEncript={trip}
        truckIsAvailableInDate={truckIsAvailableInDate}
      />
      <button
        onClick={openModal}
        className={`${
          (errorsInput.address !== null ||
            errorsInput.scheduleDay !== null ||
            errorsInput.truck !== null ||
            (dataConsult.address === inputs.address &&
              dataConsult.scheduleDay === inputs.scheduleDay)) &&
          "opacity-60 pointer-events-none"
        } bg-red-500`}
      >
        Confirmar
      </button>
    </article>
  );
}

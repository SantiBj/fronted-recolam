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
import { useTruckAvailable } from "../../hooks/editTrip/useTruckAvailable";
import { ContentModal } from "../../components/editTrip/ContentModal";


export function EditTrip() {
  const { idTripEncript } = useParams();
  const idTripDecrypt = decrypt(idTripEncript);

  const { modal, openModal, closeModal } = useModal();

  const { dataConsult, errorMessage, errorsConsult, fecthingData, loading } =
    useConsult(`trip/${idTripDecrypt}`);

  const { handleChange, inputs, errorsInput, addError } =
    useValidationInputs(dataConsult);

  useEffect(() => {
    fecthingData();
  }, []);

  //consultar disponiblidad del camion en la fecha seleccionada
  const { truckIsAvailableInDate, load, msg, err } = useTruckAvailable(
    dataConsult,
    inputs,
    errorsInput,
    addError
  );

  if (loading || loading == null || load) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  if (err !== 200 && err !== null) {
    return <Errors message={msg} />;
  }

  /// url si todo sale bien

  return (
    <article className="flex flex-col gap-[10px]">
      <ModalGeneric
        isOpen={modal}
        content={
          <ContentModal
            closeModal={closeModal}
            newTrip={inputs}
            oldTrip={dataConsult}
          />
        }
      />
      <ContentInputs
        dataConsult={dataConsult}
        handleChange={handleChange}
        inputs={inputs}
        errorsInput={errorsInput}
        idTripEncript={idTripEncript}
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

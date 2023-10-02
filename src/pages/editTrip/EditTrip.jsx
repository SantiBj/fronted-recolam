import { useParams } from "react-router-dom";
import { decrypt } from "../../services/encryptData";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { useEffect, useMemo } from "react";
import { useValidationInputs } from "../../hooks/editTrip/useValidationInputs";
import { ContentInputs } from "../../components/editTrip/ContentInputs";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { useModal } from "../../hooks/useModal";
import { useTruckAvailable } from "../../hooks/editTrip/useTruckAvailable";
import { ContentModal } from "../../components/editTrip/ContentModal";
import { NavigateBetweenPages } from "../../components/share/NavigateBetweenPages";
import { useQueryParams } from "../../hooks/share/useQueryParams";

export function EditTrip() {
  const { idTripEncript } = useParams();
  const idTripDecrypt = decrypt(idTripEncript);

  const { modal, openModal, closeModal } = useModal();

  const {
    dataConsult: oldTrip,
    errorMessage,
    errorsConsult,
    fecthingData,
    loading,
  } = useConsult(`trip/${idTripDecrypt}`);

  const { getValueUrl } = useQueryParams(`/trip-edit/${idTripEncript}`);
  const dataInitial = useMemo(() => {
    if (oldTrip !== null) {
      const date = getValueUrl("date");
      if (date !== "") {
        return {
          ...oldTrip,
          scheduleDay: date,
        };
      } else {
        return oldTrip;
      }
    }
  }, [oldTrip]);

  const { handleChange, inputs, errorsInput, addError } = useValidationInputs(
    dataInitial || ""
  );

  useEffect(() => {
    fecthingData();
  }, []);

  //consultar disponiblidad del camion en la fecha seleccionada
  const { truckIsAvailableInDate, load, msg, err } = useTruckAvailable(
    oldTrip,
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
            oldTrip={oldTrip}
          />
        }
      />
      <NavigateBetweenPages prev={`/trips/?date=${oldTrip.scheduleDay}`} />
      <ContentInputs
        dataConsult={oldTrip}
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
            (oldTrip.address === inputs.address &&
              oldTrip.scheduleDay === inputs.scheduleDay)) &&
          "opacity-60 pointer-events-none"
        } bg-red-500`}
      >
        Confirmar
      </button>
    </article>
  );
}

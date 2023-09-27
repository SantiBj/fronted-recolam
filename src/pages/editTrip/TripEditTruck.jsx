import { useParams } from "react-router-dom";
import { useConsult } from "../../hooks/useConsult";
import { decrypt } from "../../services/encryptData";
import { useEffect, useState } from "react";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { ContentCardsTruck } from "../../components/createTrip/ContentCardsTruck";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { useModal } from "../../hooks/useModal";
import { ContentM } from "../../components/editTrip/editTruck/ContentM";

export function TripEditTruck() {
  const { modal, openModal, closeModal } = useModal();
  const { idTripEncript, newDateTrip } = useParams();
  const idTripDecrypt = decrypt(idTripEncript);

  const {
    dataConsult: oldTrip,
    errorsConsult,
    errorMessage,
    loading,
    fecthingData,
  } = useConsult(`trip/${idTripDecrypt}`);

  const [truckSelected, setTruckSelected] = useState(null);

  function addValue(name, value) {
    setTruckSelected({
      [name]: value,
    });
  }

  useEffect(() => {
    if (oldTrip == null) {
      fecthingData();
    } else {
      setTruckSelected({ truck: oldTrip.truck });
    }
  }, [oldTrip]);

  if (loading || loading == null || truckSelected == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <article>
      <ModalGeneric
        content={
          <ContentM
            trip={idTripDecrypt}
            tripEncrypt={idTripEncript}
            closeModal={closeModal}
            newTruck={truckSelected.truck}
            oldTruck={oldTrip.truck}
          />
        }
        isOpen={modal}
      />
      <div>Cliente = {oldTrip.user.name}</div>
      <div>Fecha del viaje = {newDateTrip}</div>
      <div>Camion antiguo {oldTrip.truck} </div>
      {truckSelected.truck !== oldTrip.truck && (
        <div>Nuevo camion = {truckSelected.truck}</div>
      )}
      <section>
        <ContentCardsTruck
          oldTrip = {oldTrip}
          truckSelected={truckSelected}
          addValueToKey={addValue}
          newDateTrip={newDateTrip}
        />
      </section>
      <button
        className={`${
          truckSelected.truck == oldTrip.truck &&
          "opacity-60 pointer-events-none"
        } border-[2px] border-black bg-blue-500`}
        onClick={openModal}
      >
        confirmar
      </button>
    </article>
  );
}

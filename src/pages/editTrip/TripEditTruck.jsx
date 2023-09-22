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
  const { trip, truck } = useParams();
  const tripDecrypt = decrypt(trip);

  const { dataConsult, errorsConsult, errorMessage, loading, fecthingData } =
    useConsult(`trip/${tripDecrypt}`);

  const [tripInfo, setTripInfo] = useState(null);

  function addValue(name, value) {
    setTripInfo({
      ...tripInfo,
      [name]: value,
    });
  }

  useEffect(() => {
    if (dataConsult == null) {
      fecthingData();
    } else {
      setTripInfo(dataConsult);
    }
  }, [dataConsult]);

  if (loading || loading == null || tripInfo == null) {
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
            trip={tripDecrypt}
            tripEncrypt={trip}
            closeModal={closeModal}
            newTruck={tripInfo.truck}
            oldTruck={truck}
          />
        }
        isOpen={modal}
      />
      <div>Cliente = {tripInfo.user.name}</div>
      <div>Fecha del viaje = {tripInfo.scheduleDay}</div>
      <div>Camion antiguo {truck} </div>
      {tripInfo.truck !== truck && <div>Nuevo camion = {tripInfo.truck}</div>}
      <section>
        <ContentCardsTruck dataTrip={tripInfo} addValueToKey={addValue} />
      </section>
      <button
        className={`${
          tripInfo.truck == truck && "opacity-60 pointer-events-none"
        } border-[2px] border-black bg-blue-500`}
        onClick={openModal}
      >
        confirmar
      </button>
    </article>
  );
}

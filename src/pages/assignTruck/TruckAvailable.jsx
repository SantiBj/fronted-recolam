import { useNavigate, useParams } from "react-router-dom";
import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { ContentTrucks } from "../../components/assignTruck/ContentTrucks";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { useModal } from "../../hooks/useModal";
import { useConsult } from "../../hooks/useConsult";
import { ContentM } from "../../components/assignTruck/ContentM";
import { decrypt } from "../../services/encryptData";
import { NavigateBetweenPages } from "../../components/share/NavigateBetweenPages";
import { useEffect } from "react";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";

export function TruckAvailable() {
  //buscar el viaje para informacion de este
  const { trip, date } = useParams();
  const tripDecrypt = decrypt(trip);
  
  //info del viaje
  const {
    errorsConsult: statusCode,
    errorMessage: msg,
    loading: load,
    dataConsult: tripData,
    fecthingData: consultTrip,
  } = useConsult(`trip/${tripDecrypt}`);

  useEffect(() => {
    consultTrip();
  }, []);

  const { inputs, addValueInputs } = useStateInput({ truck: null }, null);
  const { modal, openModal, closeModal } = useModal();
  const text = `¿Desea asignar el camion ${inputs.truck} al viaje ${tripDecrypt}?`;

  if (load == null || load) {
    return <Loading />;
  }
  if (statusCode !== 200 && statusCode !== null) {
    return <Errors message={msg} />;
  }
  return (
    <>
      <ModalGeneric
        content={
          <ContentM
            closeModal={closeModal}
            text={text}
            tripDecrypt={tripDecrypt}
            truck={inputs.truck}
          />
        }
        isOpen={modal}
      />
      <NavigateBetweenPages
        prev={`/assign-truck/list/?date=${tripData.scheduleDay}`}
      />
      {inputs.truck !== null && <div>Camion Seleccionado = {inputs.truck}</div>}
      <section>
        <div>Fecha del viaje : {tripData.scheduleDay}</div>
        <div>
          Cliente : {tripData.user.name} Id : {tripData.user.id}
        </div>
        <div>Direccion : {tripData.address}</div>
      </section>
      <div>
        <ContentTrucks
          date={date}
          inputs={inputs}
          addValueInputs={addValueInputs}
        />
      </div>
      <button
        onClick={openModal}
        className={`${
          inputs.truck !== null
            ? "opacity-100 pointer-events-auto"
            : "opacity-60 pointer-events-none"
        } bg-green-400 p-[5px]`}
      >
        asignar camion
      </button>
    </>
  );
}

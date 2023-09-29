import { useNavigate } from "react-router-dom";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../share/Loading";

export function ContentModal({ closeModal, newTrip, oldTrip }) {
  const navigate = useNavigate();

  const {
    errorsConsult: stateConsult,
    setErrorsConsult,
    errorMessage,
    setErrorMessage,
    loading,
    fecthingData,
  } = useConsult(`trip-update/${oldTrip.id}`, "PATCH", newTrip);

  function successEditTruck() {
    navigate(`/trips`);
    setErrorMessage(null);
    setErrorsConsult(null);
  }

  function errorEditTruck() {
    closeModal();
    setErrorMessage(null);
    setErrorsConsult(null);
  }

  return (
    <div className="flex flex-col items-center justify-between">
      {loading && <Loading />}
      {stateConsult == null && (
        <>
          <div>img createTrip</div>
          <div>{`¿ Desea cambiar ${
            newTrip.scheduleDay !== oldTrip.scheduleDay
              ? `la fecha del viaje de ${oldTrip.scheduleDay} a ${newTrip.scheduleDay}`
              : ""
          } ${
            newTrip.scheduleDay !== oldTrip.scheduleDay &&
            newTrip.address !== oldTrip.address
              ? " y "
              : ""
          } ${
            newTrip.address !== oldTrip.address
              ? `la direccion del viaje de ${oldTrip.address} a ${newTrip.address}`
              : ""
          } ?`}</div>
          <div className="flex ">
            <button onClick={fecthingData}>Aceptar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </>
      )}
      {stateConsult == 200 && (
        <>
          <div>imagen de exito</div>
          <div>El viaje ha sido editado con exito</div>{" "}
          <div className="flex ">
            <button onClick={() => successEditTruck()}>Aceptar</button>
          </div>
        </>
      )}
      {(stateConsult !== 200) & (stateConsult !== null) && (
        <>
          <div>error</div>
          <div>{errorMessage}</div>{" "}
          <div className="flex ">
            <button onClick={() => errorEditTruck()}>Aceptar</button>
          </div>
        </>
      )}
    </div>
  );
}

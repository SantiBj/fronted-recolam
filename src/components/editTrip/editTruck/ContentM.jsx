import { useNavigate } from "react-router-dom";
import { useConsult } from "../../../hooks/useConsult";
import { Loading } from "../../share/Loading";

export function ContentM({
  closeModal,
  trip,
  tripEncrypt,
  oldTruck,
  newTruck,
}) {
  const navigate = useNavigate();

  const {
    errorsConsult: stateConsult,
    setErrorsConsult,
    errorMessage,
    setErrorMessage,
    loading,
    fecthingData,
  } = useConsult(`edit-truck-trip/${trip}/${newTruck}`, "PATCH");

  function successEditTruck() {
    navigate(`/trip-edit/${tripEncrypt}`);
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
          <div>{`¿ Desea cambiar el camion ${oldTruck} por ${newTruck} ?`}</div>
          <div className="flex ">
            <button onClick={fecthingData}>Aceptar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </>
      )}
      {stateConsult == 200 && (
        <>
          <div>imagen de exito</div>
          <div>El camion ha sido editado con exito</div>{" "}
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

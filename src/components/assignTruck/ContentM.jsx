import { Loading } from "../share/Loading";

//asignar camion
//cerrar el modal
//en caso de error cerrar modal y borrar el status del intento de creacion
export function ContentM({
  action,
  stateConsult,
  closeModal,
  successCreateTrip,
  errorMessage,
  errorCreateTrip,
  loadingCreate,
  text,
}) {
  return (
    <div className="flex flex-col items-center justify-between">
      {loadingCreate && <Loading />}
      {stateConsult == null && (
        <>
          <div>img asignar</div>
          <div>{text}</div>
          <div className="flex ">
            <button onClick={action}>Aceptar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </>
      )}
      {stateConsult == 200 && (
        <>
          <div>imagen de exito</div>
          <div>El camion ha sido asignado con exito </div>{" "}
          <div className="flex ">
            <button onClick={successCreateTrip}>
              Aceptar
            </button>
          </div>
        </>
      )}
      {(stateConsult !== 200) && (stateConsult !== null) && (
        <>
          <div>error</div>
          <div>{errorMessage}</div>{" "}
          <div className="flex ">
            <button onClick={errorCreateTrip}>Aceptar</button>
          </div>
        </>
      )}
    </div>
  );
}

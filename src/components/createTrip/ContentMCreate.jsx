import { Loading } from "../share/Loading";

export function ContentMCreate({
  consult,
  stateConsult,
  closeModal,
  successCreateTrip,
  errorCreateTrip,
  loadingCreate,
}) {
  return (
    <div className="flex flex-col items-center justify-between">
      {loadingCreate && <Loading />}
      {stateConsult == null && (
        <>
          <div>img createTrip</div>
          <div>¿ Desea crear el viaje ?</div>
          <div className="flex ">
            <button onClick={consult}>Aceptar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </>
      )}
      {stateConsult == 200 && (
        <>
          <div>imagen de exito</div>
          <div>El viaje ha sido creado</div>{" "}
          <div className="flex ">
            <button onClick={() => successCreateTrip(closeModal)}>
              Aceptar
            </button>
          </div>
        </>
      )}
      {(stateConsult !== 200) & (stateConsult !== null) && (
        <>
          <div>error</div>
          <div>El viaje no pudo ser creado intente mas tarde</div>{" "}
          <div className="flex ">
            <button onClick={() => errorCreateTrip(closeModal)}>Aceptar</button>
          </div>
        </>
      )}
    </div>
  );
}

import { useEndTripCp } from "../../hooks/endTripCompany/useEndTripCp";
import { Loading } from "../share/Loading";

export function ContentModal({ trip, closeModal }) {
  const {
    successEndTrip,
    errorEndTrip,
    loading,
    errorMessage,
    errorsConsult,
    fecthingData,
  } = useEndTripCp(trip.id, closeModal);
  return (
    <div className="flex flex-col items-center justify-between">
      {loading && <Loading />}
      {errorsConsult == null && (
        <>
          <div>img asignar</div>
          <div>
            ¿ Deseas finalizar el viaje del cliente {trip.user.name} con el
            camion {trip.truck} ?
          </div>
          <div className="flex ">
            <button onClick={fecthingData}>Aceptar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </>
      )}
      {errorsConsult == 200 && (
        <>
          <div>imagen de exito</div>
          <div>El viaje a finalizado con exito </div>{" "}
          <div className="flex ">
            <button onClick={successEndTrip}>Aceptar</button>
          </div>
        </>
      )}
      {errorsConsult !== 200 && errorsConsult !== null && (
        <>
          <div>error</div>
          <div>{errorMessage}</div>{" "}
          <div className="flex ">
            <button onClick={errorEndTrip}>Aceptar</button>
          </div>
        </>
      )}
    </div>
  );
}

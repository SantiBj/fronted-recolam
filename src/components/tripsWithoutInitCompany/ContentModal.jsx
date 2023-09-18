import { useNavigate } from "react-router-dom";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../share/Loading";
import { useInitTripCompany } from "../../hooks/initTripCompany/useInitTripCompany";

export function ContentModal({ closeModal, trip }) {
  const {
    successInitTrip,
    errorInitTrip,
    loading,
    errorMessage,
    errorsConsult,
    fecthingData,
  } = useInitTripCompany(trip.id, closeModal);
  return (
    <div className="flex flex-col items-center justify-between">
      {loading && <Loading />}
      {errorsConsult == null && (
        <>
          <div>img asignar</div>
          <div>
            ¿ Deseas iniciar el viaje del cliente {trip.user.name} con el camion{" "}
            {trip.truck} ?
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
          <div>El viaje a sido iniciado con exito </div>{" "}
          <div className="flex ">
            <button onClick={successInitTrip}>Aceptar</button>
          </div>
        </>
      )}
      {errorsConsult !== 200 && errorsConsult !== null && (
        <>
          <div>error</div>
          <div>{errorMessage}</div>{" "}
          <div className="flex ">
            <button onClick={errorInitTrip}>Aceptar</button>
          </div>
        </>
      )}
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { useEffect } from "react";

export function DetailsTrip() {
  const { trip } = useParams();

  const { dataConsult, errorMessage, errorsConsult, fecthingData, loading } =
    useConsult(`trip/${trip}`);

    useEffect(()=>{
        fecthingData()
    },[])

  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
  <div>
    <div>
        Dia del viaje = { dataConsult.scheduleDay }
    </div>
    <div>
        Cliente = { dataConsult.user.name }
    </div>
    <div>
        Camion = { dataConsult.truck }
    </div>
    <div>
        Direccion = { dataConsult.address }
    </div>
  </div>
  );
}

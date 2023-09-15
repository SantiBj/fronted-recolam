import { useContext, useEffect } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Link, Navigate } from "react-router-dom";
import { ContentCardsCust } from "../../components/createTrip/ContentCardsCust";
import { useConsult } from "../../hooks/useConsult";
import { Errors } from "../../components/share/Errors"
import { Loading } from "../../components/share/Loading"

export function Customer() {
  const { dataTrip, addValueToKey } = useContext(dataCreateTrip);
  const { dataConsult, loading, fecthingData, errorsConsult,errorMessage } = useConsult(
    `quantity-trips-user-date/${dataTrip.user}/${dataTrip.scheduleDay}`
  );


  if (dataTrip.scheduleDay == "") {
    return <Navigate to={"/create-trip/scheduleDay"} />;
  }

  useEffect(() => {
    if (dataTrip.user !== "") {
      fecthingData();
    }
  }, [dataTrip]);


  if (loading || loading == null && dataTrip.user){
    return <Loading/>
  }
  if (errorsConsult !== 200 && errorsConsult !== null){
    return <Errors message={errorMessage} />
  }
  return (
    <div className="flex flex-col gap-[20px]">
      <h2>Lista de clientes con menos de 3 viajes en {dataTrip.scheduleDay}</h2>
      <ContentCardsCust addValueToKey={addValueToKey} dataTrip={dataTrip} />
      <Link
        to={"/create-trip/truck"}
        className={`border-2 bg-blue-400 p-[3px] ${
          dataTrip.user === ""
            ? "opacity-60 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        continuar
      </Link>
      <div className=" transition-all">
        {dataTrip.user !== "" && dataConsult !== null && (
          <>
            <h3>
              cliente = {dataConsult.user.name} documento ={" "}
              {dataConsult.user.id}
            </h3>
            cantidad de viajes en {dataTrip.scheduleDay} ={" "}
            {dataConsult.QuantityTrips}
          </>
        )}
      </div>
    </div>
  );
}

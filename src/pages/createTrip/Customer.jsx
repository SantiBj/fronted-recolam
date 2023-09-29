import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Link, Navigate } from "react-router-dom";
import { ContentCardsCust } from "../../components/createTrip/ContentCardsCust";
import { NavigateBetweenPages } from "../../components/share/NavigateBetweenPages";

export function Customer() {
  const { dataTrip, addValueToKey, urlsDataTripSelected, addUrl } =
    useContext(dataCreateTrip);

  if (dataTrip.scheduleDay == "") {
    return <Navigate to={"/create-trip/scheduleDay"} />;
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <h2>Lista de clientes con menos de 3 viajes en {dataTrip.scheduleDay}</h2>
      <ContentCardsCust
        addUrl={addUrl}
        addValueToKey={addValueToKey}
        dataTrip={dataTrip}
      />
      <Link
        to={urlsDataTripSelected.truck}
        className={`border-2 bg-blue-400 p-[3px] ${
          dataTrip.user === ""
            ? "opacity-60 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        continuar
      </Link>
      <NavigateBetweenPages prev={urlsDataTripSelected.scheduleDay} next="" />
    </div>
  );
}

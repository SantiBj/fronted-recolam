import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Link, Navigate } from "react-router-dom";
import { ContentCardsTruck } from "../../components/createTrip/ContentCardsTruck";
import { NavigateBetweenPages } from "../../components/share/NavigateBetweenPages";

export function Truck() {
  const { addValueToKey, dataTrip, urlsDataTripSelected, addUrl } =
    useContext(dataCreateTrip);

  if (dataTrip.user === "") {
    return <Navigate to="/create-trip/customer" />;
  }
  return (
    <div>
      <ContentCardsTruck
        addUrl={addUrl}
        truckSelected={dataTrip}
        addValueToKey={addValueToKey}
        newDateTrip={dataTrip.scheduleDay}
        isCreate
      />
      <Link to={"/create-trip/confirmation"} className={`bg-blue-500 p-[3px]`}>
        continuar
      </Link>
      <NavigateBetweenPages prev={urlsDataTripSelected.customer} />
    </div>
  );
}

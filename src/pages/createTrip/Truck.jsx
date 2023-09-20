import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Link, Navigate } from "react-router-dom";
import { ContentCardsTruck } from "../../components/createTrip/ContentCardsTruck";

export function Truck() {
  const { addValueToKey, dataTrip } = useContext(dataCreateTrip);

  if (dataTrip.user === "") {
    return <Navigate to="/create-trip/customer" />;
  }
  return (
    <div>
      <ContentCardsTruck dataTrip={dataTrip} addValueToKey={addValueToKey} />
      <Link
        to={"/create-trip/confirmation"}
        className={`bg-blue-500 p-[3px]`}
      >
        continuar
      </Link>
    </div>
  );
}

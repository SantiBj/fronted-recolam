import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Link, Navigate } from "react-router-dom";
import { ContentCardsCust } from "../../components/createTrip/ContentCardsCust";

export function Customer() {
  const { dataTrip, addValueToKey } = useContext(dataCreateTrip);

  if (dataTrip.scheduleDay == "" || dataTrip.weightAvg == "") {
    return <Navigate to={"/create-trip/scheduleDay"} />;
  }
  return (
    <div>
      <ContentCardsCust addValueToKey={addValueToKey} dataTrip={dataTrip}/>
      <Link
        to={"/create-trip/truck"}
        className={`border-2 bg-blue-400 p-[3px] ${
          dataTrip.customer === ""
            ? "opacity-60 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        continuar
      </Link>
    </div>
  );
}

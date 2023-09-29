import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { ContentInputs } from "../../components/createTrip/ContentInputs";

export function ScheduleDay() {
  const { addValueToKey, dataTrip, resetDataSelected, urlsDataTripSelected } =
    useContext(dataCreateTrip);

  return (
    <div>
      <ContentInputs
        dataTrip={dataTrip}
        addValueToKey={addValueToKey}
        resetDataSelected={resetDataSelected}
      />
      <Link
        to={urlsDataTripSelected.customer}
        className={`border-2 border-blue-500 bg-blue-400 ${
          dataTrip.scheduleDay == "" || !dataTrip.scheduleDay
            ? " opacity-60 pointer-events-none "
            : " opacity-100  pointer-events-auto "
        }`}
      >
        continuar
      </Link>
    </div>
  );
}

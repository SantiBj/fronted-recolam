import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Link, Navigate } from "react-router-dom";
import { ContentCardsTruck } from "../../components/createTrip/ContentCardsTruck";
import { NavigateBetweenPages } from "../../components/share/NavigateBetweenPages";
import { TitleMajor } from "../../components/share/TitleMajor";
import { Title } from "../../components/share/Title";
import { BtnContinue } from "../../components/share/BtnContinue";

export function Truck() {
  const { addValueToKey, dataTrip, urlsDataTripSelected, addUrl } =
    useContext(dataCreateTrip);

  if (dataTrip.user === "") {
    return <Navigate to="/create-trip/customer" />;
  }
  return (
    <div>
      <div className="space-y-[30px]">
        <TitleMajor text={"Crear Viaje"} />
        <Title
          to={urlsDataTripSelected.customer}
          text={`Lista de camiones con menos de 3 viajes para el  ${dataTrip.scheduleDay}`}
        />
      </div>
      <div className="space-y-[70px] mt-[100px]">
        <ContentCardsTruck
          addUrl={addUrl}
          truckSelected={dataTrip}
          addValueToKey={addValueToKey}
          newDateTrip={dataTrip.scheduleDay}
          isCreate
        />
        <div className="w-full flex justify-end">
          <BtnContinue to={"/create-trip/confirmation"} />
        </div>
      </div>
    </div>
  );
}

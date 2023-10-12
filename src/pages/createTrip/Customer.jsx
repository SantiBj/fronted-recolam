import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Link, Navigate } from "react-router-dom";
import { ContentCardsCust } from "../../components/createTrip/ContentCardsCust";
import { Title } from "../../components/share/Title";
import { TitleMajor } from "../../components/share/TitleMajor";
import { BtnContinue } from "../../components/share/BtnContinue";

export function Customer() {
  const { dataTrip, addValueToKey, urlsDataTripSelected, addUrl } =
    useContext(dataCreateTrip);

  if (dataTrip.scheduleDay == "") {
    return <Navigate to={"/create-trip/scheduleDay"} />;
  }

  return (
    <div>
      <div className="space-y-[30px]">
        <TitleMajor text={"Crear Viaje"} />
        <Title
          to={urlsDataTripSelected.scheduleDay}
          text={`Lista de clientes con menos de 3 viajes el ${dataTrip.scheduleDay}`}
        />
      </div>

      <div className="space-y-[70px] mt-[100px]">
        <ContentCardsCust
          addUrl={addUrl}
          addValueToKey={addValueToKey}
          dataTrip={dataTrip}
        />
        <div
          className={`flex justify-end mx-auto ${
            dataTrip.user === ""
              ? "opacity-60 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          <BtnContinue to={urlsDataTripSelected.truck} />
        </div>
      </div>
    </div>
  );
}

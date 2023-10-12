import { useContext } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { ContentInputs } from "../../components/createTrip/ContentInputs";
import { BtnContinue } from "../../components/share/BtnContinue";
import { TitleMajor } from "../../components/share/TitleMajor"


export function ScheduleDay() {
  const { addValueToKey, dataTrip, resetDataSelected, urlsDataTripSelected } =
    useContext(dataCreateTrip);

  return (
    <div className="bg-white max-w-[700px] w-[70%] mx-auto space-y-[25px] flex flex-col items-center py-[100px] rounded-2xl">
      <TitleMajor text={"Crear Viaje"} color="black" size="sm"/>
      <ContentInputs
        dataTrip={dataTrip}
        addValueToKey={addValueToKey}
        resetDataSelected={resetDataSelected}
      />
      <div
        className={`flex w-[70%] mx-auto justify-end ${
          (dataTrip.scheduleDay == "" || !dataTrip.scheduleDay) &&
          "opacity-50 pointer-events-none"
        }`}
      >
        <BtnContinue to={urlsDataTripSelected.customer} />
      </div>
    </div>
  );
}

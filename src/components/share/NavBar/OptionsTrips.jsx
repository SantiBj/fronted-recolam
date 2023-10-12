import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkTrip } from "./LinkTrip";

export function OptionsTrips() {
  const [optionsTrips, setOptionsTrips] = useState(false);

  function handleMouseEnter() {
    setOptionsTrips(true);
  }

  function handleMouseLeave() {
    setOptionsTrips(false);
  }

  return (
    <div
      className="flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`text-center ${
          optionsTrips &&
          "bg-[#0DB23C] rounded-t-lg w-[125px] transition-all"
        }`}
      >
        viajes
      </div>
      <div
        className={`${
          !optionsTrips && "hidden"
        } transition-all flex flex-col items-center bg-[#0DB23C] rounded-b-lg absolute top-[60px] w-[125px]`}
      >
        <LinkTrip to={"/trip-actives"} text={"Viajes Activos"} />
        <LinkTrip to={"/create-trip/scheduleDay"} text={"Crear Viaje"} />
        <LinkTrip to={"/assign-truck/list"} text={"Asignar Camion"}/>
        <LinkTrip to={"/trips-without-init/"} text={"Iniciar Viaje"} />
        <LinkTrip to={"/trips"} text={"Editar Viaje"} />
      </div>
    </div>
  );
}

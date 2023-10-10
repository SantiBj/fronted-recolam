import { Link } from "react-router-dom";
import logo from "../../utils/logo.png";
import { useState } from "react";

export function NavBar() {
  const [optionsTrips, setOptionsTrips] = useState(true);

  function handleMouseEnter() {
    setOptionsTrips(true);
  }

  function handleMouseLeave() {
    setOptionsTrips(false);
  }

  return (
    <nav className="flex justify-around py-[20px]">
      <div className="w-[30%]">
        <img src={logo} alt="Recolam" className="h-[50px]" />
      </div>
      <div className="flex justify-between w-[70%]">
        <Link to={"/"}>Inicio</Link>
        <Link to={"/create/user"}>Crear usuario</Link>
        <div
          className="flex flex-col"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`text-center ${
              optionsTrips && "bg-[#0DB23C] text-white rounded-t-lg"
            }`}
          >
            viajes
          </div>
          <div
            className={`${
              !optionsTrips && "hidden"
            } transition-all flex flex-col items-center bg-[#0DB23C] rounded-b-lg p-[10px] text-white`}
          >
            <Link className="hover:bg-[#D9D9D9] hover:opacity-[50%] " to={"/create-trip/scheduleDay"}>Crear Viaje</Link>
            <Link to={"/trips-without-init/"}>Iniciar Viaje</Link>
            <Link to={"/trip-actives"}>Viajes Activos</Link>
          </div>
        </div>
        <Link to={"/assign-truck/list"}>Asignar Camion</Link>
        <Link to={"/trips"}>Editar Viaje</Link>

        <Link to={"/trucks"}>Camiones</Link>
      </div>
    </nav>
  );
}

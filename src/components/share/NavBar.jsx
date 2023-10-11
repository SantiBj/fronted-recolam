import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { OptionsTrips } from "./NavBar/OptionsTrips";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import  pread  from "../../utils/pread.png";

export function NavBar() {
  const [movil, setMovil] = useState(true);

  function setVisibilityMovil() {
    setMovil(!movil);
  }

  return (
    <>
      {" "}
      <nav className="flex flex-col md:flex-row justify-between items-center py-[20px] w-[85%] max-w-[1300px] mx-auto">
        <div className="w-full md:w-[30%] flex justify-between items-center">
          <div className="w-fit p-[3px] rounded-md flex gap-[4px]">
            <img src={pread} className="h-[45px] mr-[10px]" />
            <div className="bg-white w-[2px]"></div>
            <img
              src="https://acortar.link/8CbrTE"
              alt="Recolam"
              className="h-[45px]"
            />
          </div>
          <div
            onClick={setVisibilityMovil}
            className="text-white transition-all md:hidden"
          >
            {movil ? <FiX size={35} /> : <IoMdMenu size={35} />}
          </div>
        </div>
        <div className={`${!movil && "hidden"} w-full md:block md:w-[70%]`}>
          <div
            className={`flex flex-col gap-y-[6px] bg-[#2c8d42] p-[30px] rounded-lg mt-[10px]
          md:flex-row md:gap-0 md: md:justify-between md:p-0 md:bg-transparent md:mt-0
          transition-all text-white font-medium`}
          >
            <Link to={"/"}>Inicio</Link>
            <Link to={"/create/user"}>Crear usuario</Link>
            <OptionsTrips />
            <Link to={"/assign-truck/list"}>Asignar Camion</Link>
            <Link to={"/trucks"}>Camiones</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

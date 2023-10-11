import { useEffect, useState } from "react";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../share/Loading";
import { Errors } from "../share/Errors";

export function CardTruck({ truck }) {
  const [active, setActive] = useState(truck.isDisable);
  const { dataConsult,errorsConsult, errorMessage, loading, fecthingData } = useConsult(
    "disable-truck/" + truck.placa,
    "PATCH"
  );

  function handleClick() {
    fecthingData();
  }

  useEffect(() => {
    if (errorsConsult == 200) {
      setActive(!active);
    }
  }, [dataConsult]);

  if (loading) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <div
      onClick={handleClick}
      className={`${
        active ? "opacity-50" : "opacity-100"
      } bg-[#E6E6E6] w-[150px] p-[15px] rounded-lg space-y-[10px] transition-all hover:scale-105`}
    > 
      
      <img src="https://acortar.link/WA1HsO" className="w-[100px] mx-auto" alt="" />
      <p className="text-center font-semibold">{truck.placa}</p>
    </div>
  );
}

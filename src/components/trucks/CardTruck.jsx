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
        active ? "opacity-60" : "opacity-100"
      } p-[5px] border-[2px] border-blue-500`}
    >
      {truck.placa}
    </div>
  );
}

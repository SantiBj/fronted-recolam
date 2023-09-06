import { CardTruck } from "./CardTruck";
import { useConsult } from "../../hooks/useConsult";
import { useEffect } from "react";

export function ContentCardsTruck({ dataTrip, addValueToKey }) {
  const { dataConsult, errorsConsult, loading, fecthingData } = useConsult(
    `trucks-available-date?date=${dataTrip.scheduleDay}`
  );

  useEffect(() => {
    fecthingData();
  }, []);

  function addTruck(e) {
    const value = e.target.value;
    const name = e.target.name;
    addValueToKey(name, value);
  }

  if (loading || loading == null) {
    return <h1>loading ...</h1>;
  }
  return (
    <div>
      {dataConsult.map((truck) => (
        <CardTruck key={truck.placa} onclick={addTruck} truck={truck} dataTrip={dataTrip} />
      ))}
    </div>
  );
}

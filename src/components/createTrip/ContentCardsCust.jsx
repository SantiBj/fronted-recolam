import { CardCustomer } from "./CardCustomer";
import { useEffect } from "react";
import { useConsult } from "../../hooks/useConsult";

export function ContentCardsCust({ addValueToKey,dataTrip }) {
  const { dataConsult, errorsConsult, loading, fecthingData } =
    useConsult("customers");
  useEffect(() => {
    fecthingData();
  }, []);

  function addCustomTrip(e) {
    const value = e.target.value;
    const nameInput = e.target.name;
    addValueToKey(nameInput, value);
  }

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      {dataConsult.results.map((customer) => (
        <CardCustomer
          customer={customer}
          dataTrip={dataTrip}
          onChange={addCustomTrip}
        />
      ))}
    </div>
  );
}

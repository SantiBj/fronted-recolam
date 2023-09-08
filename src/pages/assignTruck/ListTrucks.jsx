import { useEffect } from "react";
import { ListDates } from "../../components/assignTruck/listTruckWithoutDate/listDates";
import { useConsult } from "../../hooks/useConsult";
import { useStateInput } from "../../hooks/createTrip/useStateInput";

export function ListTrucks() {
  const { inputs, addValueInputs } = useStateInput("", null);
  const {
    dataConsult,
    errorsConsult,
    setErrorsConsult,
    loading,
    fecthingData,
  } = useConsult(`trips-without-truck/${inputs}`);

  useEffect(() => {
    fecthingData();
  }, [inputs]);

  return (
    <div>
      <ListDates state={inputs} setState={addValueInputs} />
      {
        dataConsult?.results.map((trip)=>(
            <h1>{trip.id}-{trip.user}-{trip.address} </h1>
        ))
      }
    </div>
  );
}

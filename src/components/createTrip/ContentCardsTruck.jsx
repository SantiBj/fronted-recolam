import { useConsult } from "../../hooks/useConsult";
import { CardTruck } from "../share/CardTruck";
import { useEffect, useRef } from "react";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../share/Pagination";
import { Loading } from "../share/Loading";

export function ContentCardsTruck({
  truckSelected,
  addValueToKey,
  newDateTrip,
  oldTrip,
}) {
  
  const { page, nextPage, prevPage } = usePaginate();
  const url = `trucks-available-date/${newDateTrip}?page=${page}`;
  const {
    dataConsult: trucksAvailable,
    errorsConsult,
    setDataConsult: setTrucksAvailables,
    errorMessage,
    loading,
    fecthingData,
  } = useConsult(url);

  useEffect(() => {
    fecthingData();
  }, [page]);

  function addTruck(e) {
    const value = e.target.value;
    const name = e.target.name;
    addValueToKey(name, value);
  }


  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <div>
      {trucksAvailable.results.map((truck) => (
        <CardTruck
          key={truck.placa}
          onclick={addTruck}
          truck={truck}
          dataTrip={truckSelected}
        />
      ))}
      <Pagination
        dataConsult={trucksAvailable}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

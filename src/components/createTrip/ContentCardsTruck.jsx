import { useConsult } from "../../hooks/useConsult";
import { CardTruck } from "../share/CardTruck";
import { useEffect } from "react";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../share/Pagination";
import { Loading } from "../share/Loading";

export function ContentCardsTruck({ dataTrip, addValueToKey }) {
  const { page, nextPage, prevPage } = usePaginate();
  const url = `trucks-available-date/${dataTrip.scheduleDay}?page=${page}`;
  const { dataConsult, errorsConsult, errorMessage, loading, fecthingData } =
    useConsult(url);

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
      {dataConsult.results.map((truck) => (
        <CardTruck
          key={truck.placa}
          onclick={addTruck}
          truck={truck}
          dataTrip={dataTrip}
        />
      ))}
      <Pagination
        dataConsult={dataConsult}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

import { useEffect } from "react";
import { useConsult } from "../../hooks/useConsult";
import { CardTruck } from "../share/CardTruck";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../share/Pagination";

export function ContentTrucks({ date,inputs,addValueInputs }) {
  const { page, nextPage, prevPage } = usePaginate();
  const {
    dataConsult,
    errorsConsult,
    setErrorsConsult,
    loading,
    fecthingData,
  } = useConsult(`trucks-available-date/${date}?page=${page}`);

  useEffect(() => {
    fecthingData();
  }, [page]);

  function onClick(e) {
    const value = e.target.value;
    addValueInputs("truck", value);
  }

  return (
    <div>
      {dataConsult?.results.map((truck) => (
        <CardTruck
          key={truck.placa}
          onclick={onClick}
          truck={truck}
          dataTrip={inputs}
        />
      ))}
      {dataConsult !== null && (
        <Pagination
          dataConsult={dataConsult}
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </div>
  );
}

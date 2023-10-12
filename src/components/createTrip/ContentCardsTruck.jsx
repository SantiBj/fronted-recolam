import { useConsult } from "../../hooks/useConsult";
import { CardTruck } from "../share/CardTruck";
import { useEffect, useMemo } from "react";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../share/Pagination";
import { Loading } from "../share/Loading";
import { Errors } from "../share/Errors";
import { useQueryParams } from "../../hooks/share/useQueryParams";

export function ContentCardsTruck({
  truckSelected,
  addValueToKey,
  newDateTrip,
  addUrl,
  isCreate = false,
}) {
  let initialPage;
  const thisUrl = "/create-trip/truck";
  const { addValueQueryParams, getValueUrl } = useQueryParams(thisUrl);
  if (isCreate) {
    initialPage = useMemo(() => {
      const numberPage = parseInt(getValueUrl("page")) || 1;
      return numberPage;
    }, []);
  } else {
    initialPage = 1;
  }

  const { page, nextPage, prevPage } = usePaginate(initialPage);
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
    if (isCreate) {
      addValueQueryParams("page", page);
      addUrl("truck", `${thisUrl}?page=${page}`);
    }
  }

  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <div className="space-y-[40px]">
      <div className="grid justify-items-center gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] w-full">
        {trucksAvailable.results.map((truck) => (
          <CardTruck
            key={truck.placa}
            onclick={addTruck}
            truck={truck}
            dataTrip={truckSelected}
          />
        ))}
      </div>
      <Pagination
        dataConsult={trucksAvailable}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

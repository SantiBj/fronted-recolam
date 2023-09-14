import { useEffect } from "react";
import { CardTrips } from "../components/share/CardTrips";
import { Pagination } from "../components/share/Pagination";
import { useConsult } from "../hooks/useConsult";
import { usePaginate } from "../hooks/share/usePaginate";

export function TripsWithoutInit() {
  const { page, nextPage, prevPage } = usePaginate();
  const { dataConsult, errorsConsult, fecthingData, loading } = useConsult(
    `trips-without-initCompany-today?page=${page}`
  );

  useEffect(() => {
    fecthingData();
  }, []);

  return (
    <div>
      <div>
        {dataConsult?.results.map((trip) => {
          <CardTrips trip={trip} to={"/"} />;
        })}
      </div>
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

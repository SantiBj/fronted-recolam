import { useEffect } from "react";
import { CardTrips } from "../../components/share/CardTrips";
import { Pagination } from "../../components/share/Pagination";
import { useConsult } from "../../hooks/useConsult";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Errors } from "../../components/share/Errors";
import { Loading } from "../../components/share/Loading";

export function TripsWithoutInit() {
  const { page, nextPage, prevPage } = usePaginate();
  const { dataConsult, errorMessage, errorsConsult, fecthingData, loading } =
    useConsult(`trips-without-initCompany-today?page=${page}`);

  useEffect(() => {
    fecthingData();
  }, [page]);

  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== 200 && errorsConsult !== null) {
    return <Errors message={errorMessage} />;
  }
  return (
    <div className="flex flex-col gap-2">
      <h2>Viajes sin iniciar con camion asignado</h2>
      <div>
        {dataConsult.results.map((trip) => (
          <CardTrips
            key={trip.id}
            trip={trip}
            to={`/trip-without-details/${trip.id}`}
          />
        ))}
      </div>
      {dataConsult.results.length > 0 && (
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

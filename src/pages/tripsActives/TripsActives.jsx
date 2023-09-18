import { useEffect } from "react";
import { CardTrips } from "../../components/share/CardTrips";
import { Errors } from "../../components/share/Errors";
import { Loading } from "../../components/share/Loading";
import { useConsult } from "../../hooks/useConsult";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../../components/share/Pagination";

export function TripsActives() {
  const { page, nextPage, prevPage } = usePaginate();
  const { dataConsult, errorsConsult, errorMessage, loading, fecthingData } =
    useConsult(`trips-actives-today-all?page=${page}`);

  useEffect(() => {
    fecthingData();
  }, [page]);

  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <article>
      <section>
        {dataConsult.results.map((trip) => (
          <CardTrips trip={trip} to={"/trip-active-details/"} />
        ))}
      </section>
      <Pagination
        dataConsult={dataConsult}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </article>
  );
}

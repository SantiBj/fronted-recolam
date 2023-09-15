import { useEffect } from "react";
import { ListDates } from "../../components/assignTruck/listTruckWithoutDate/ListDates";
import { useConsult } from "../../hooks/useConsult";
import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../../components/share/Pagination";
import { CardTrips } from "../../components/share/CardTrips";
import { Errors } from "../../components/share/Errors";
import { Loading } from "../../components/share/Loading"

export function ListTripsWithoutTruck() {
  const { page, nextPage, prevPage } = usePaginate();
  const { inputs, addValueInputs } = useStateInput("", null);
  const { dataConsult, loading,fecthingData, errorsConsult, errorMessage } = useConsult(
    `trips-without-truck/${inputs}?page=${page}`
  );

  useEffect(() => {
    if (inputs !== "" || page > 1) {
      fecthingData();
    }
  }, [inputs, page]);

  if (loading || loading == null && inputs !== "") {
    return <Loading/>
  }
  if (errorsConsult !== 200 && errorsConsult !== null) {
    return <Errors message={errorMessage} />;
  }
  return (
    <>
      <div>
        <ListDates state={inputs} setState={addValueInputs} />
        {dataConsult?.results.map((trip) => (
          <CardTrips
            trip={trip}
            to={`/trip/assign-truck/${trip.id}/${trip.scheduleDay}`}
          />
        ))}
      </div>
      {dataConsult?.results.length > 0 && (
        <Pagination
          dataConsult={dataConsult}
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </>
  );
}

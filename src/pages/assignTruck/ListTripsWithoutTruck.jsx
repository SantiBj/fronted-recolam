import { useContext, useEffect, useMemo } from "react";
import { ListDates } from "../../components/assignTruck/listTruckWithoutDate/ListDates";
import { useConsult } from "../../hooks/useConsult";
import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../../components/share/Pagination";
import { CardTrips } from "../../components/share/CardTrips";
import { Errors } from "../../components/share/Errors";
import { Loading } from "../../components/share/Loading";
import { dataCreateTrip } from "../../context/CreateTrip";
import { useQueryParams } from "../../hooks/share/useQueryParams";

export function ListTripsWithoutTruck() {
  const { page, setPage, nextPage, prevPage } = usePaginate();
  const { addValueQueryParams, getValueUrl } =
    useQueryParams("/assign-truck/list");
  const { resetDataSelected, dataTrip, resetUrls } = useContext(dataCreateTrip);
  const initialDate = useMemo(() => {
    console.log(getValueUrl("date"));
  }, []);
  const { inputs, addValueInputs } = useStateInput("", initialDate);
  const { dataConsult, loading, fecthingData, errorsConsult, errorMessage } =
    useConsult(`trips-without-truck/${inputs}?page=${page}`);

  function addValueAndResetPage(key, value) {
    addValueQueryParams("date", value);
    addValueInputs(key, value);
    setPage(1);
  }

  useEffect(() => {
    if (inputs !== "" || page > 1) {
      fecthingData();
    }
  }, [inputs, page]);

  useEffect(() => {
    if (dataTrip.scheduleDay !== "") {
      resetDataSelected();
      resetUrls();
    }
  }, []);

  if (loading || (loading == null && inputs !== "")) {
    return <Loading />;
  }
  if (errorsConsult !== 200 && errorsConsult !== null) {
    return <Errors message={errorMessage} />;
  }
  return (
    <>
      <div>
        <ListDates state={inputs} setState={addValueAndResetPage} />
        {dataConsult?.results.map((trip) => (
          <CardTrips
            trip={trip}
            to={`/trip/assign-truck/`}
            assignTruck
            oldTruckAssigned
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

import { useContext, useEffect, useState } from "react";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { SelectDate } from "../../components/share/SelectDate";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../../components/share/Pagination";
import { CardTrips } from "../../components/share/CardTrips";
import { dataCreateTrip } from "../../context/CreateTrip";

export function Trips() {
  const { page, nextPage, prevPage } = usePaginate();
  const { resetDataSelected, dataTrip, resetUrls } = useContext(dataCreateTrip);
  const [dateSelected, setDateSelected] = useState("");
  const { dataConsult, errorsConsult, errorMessage, loading, fecthingData } =
    useConsult("date-trips-without-start");

  const {
    dataConsult: trips,
    setDataConsult: setTrips,
    errorsConsult: statusConsult,
    errorMessage: messageError,
    loading: loadingTrips,
    fecthingData: consultTrips,
  } = useConsult(`trips-without-start/${dateSelected}?page=${page}`);

  useEffect(() => {
    fecthingData();
    if (dataTrip.scheduleDay !== "") {
      console.log("limpiando contexto");
      resetUrls();
      resetDataSelected();
    }
  }, []);

  useEffect(() => {
    if (dateSelected !== "") {
      consultTrips();
    } else {
      setTrips(null);
    }
  }, [dateSelected, page]);

  function handleChangeDate(e) {
    const { value } = e.target;
    setDateSelected(value);
  }

  if (loading == null || loading || loadingTrips) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  if (statusConsult !== null && statusConsult !== 200) {
    return <Errors message={messageError} />;
  }
  return (
    <article>
      <h3>Listado de viajes sin iniciar</h3>
      <section>
        <SelectDate
          dates={dataConsult}
          handleChange={handleChangeDate}
          state={dateSelected}
        />
      </section>
      <section>
        {trips?.results.map((trip) => (
          <CardTrips
            key={trip.id}
            trip={trip}
            to={"/trip-edit/"}
            editTrip
            oldTruckAssigned
          />
        ))}
      </section>
      {trips?.results.length > 0 && (
        <Pagination
          dataConsult={trips}
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
      {trips == null && dateSelected == "" && (
        <div>Para ver los viajes debe seleccionar una fecha</div>
      )}
    </article>
  );
}

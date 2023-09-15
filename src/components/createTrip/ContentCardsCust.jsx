import { CardCustomer } from "./CardCustomer";
import { useEffect } from "react";
import { useConsult } from "../../hooks/useConsult";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../share/Pagination";
import { Loading } from "../share/Loading";
import { Errors } from "../share/Errors";

export function ContentCardsCust({ addValueToKey, dataTrip }) {
  const { page, nextPage, prevPage } = usePaginate();
  const url = `customers/${dataTrip.scheduleDay}?page=${page}`;
  const { dataConsult, errorsConsult, errorMessage, loading, fecthingData } =
    useConsult(url);

  useEffect(() => {
    fecthingData();
  }, [page]);

  function addCustomTrip(e) {
    const value = e.target.value;
    const nameInput = e.target.name;
    addValueToKey(nameInput, value);
  }

  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }


  return (
    <>
      <div>
        {dataConsult.results.map((customer) => (
          <CardCustomer
            key={customer.id}
            customer={customer}
            dataTrip={dataTrip}
            onChange={addCustomTrip}
          />
        ))}
      </div>
      <Pagination
        dataConsult={dataConsult}
        page={page}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}

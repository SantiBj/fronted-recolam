import { CardCustomer } from "./CardCustomer";
import { useEffect, useMemo, useRef } from "react";
import { useConsult } from "../../hooks/useConsult";
import { usePaginate } from "../../hooks/share/usePaginate";
import { Pagination } from "../share/Pagination";
import { Loading } from "../share/Loading";
import { Errors } from "../share/Errors";
import { useQueryParams } from "../../hooks/share/useQueryParams";

export function ContentCardsCust({ addValueToKey, dataTrip, addUrl }) {
  const thisUrl = "/create-trip/customer";
  const { addValueQueryParams, getValueUrl } = useQueryParams(thisUrl);
  const initialPage = useMemo(() => {
    const numberPageUrl = parseInt(getValueUrl("page")) || 1;
    return numberPageUrl;
  }, []);
  const { page, nextPage, prevPage } = usePaginate(initialPage);

  const urlConsultApi = `customers/${dataTrip.scheduleDay}?page=${page}`;
  const { dataConsult, errorsConsult, errorMessage, loading, fecthingData } =
    useConsult(urlConsultApi);

  useEffect(() => {
    fecthingData();
  }, [page]);

  function addCustomTrip(e) {
    const value = e.target.value;
    const nameInput = e.target.name;
    addValueToKey(nameInput, value);
    addValueQueryParams("page", page);
    addUrl("customer", `${thisUrl}?page=${page}`);
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

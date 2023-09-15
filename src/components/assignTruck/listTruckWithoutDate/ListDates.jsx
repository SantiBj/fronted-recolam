import { useEffect } from "react";
import { useConsult } from "../../../hooks/useConsult";
import { SelectDate } from "../../share/SelectDate";
import { Errors } from "../../share/Errors";
import { Loading } from "../../share/Loading";

export function ListDates({ state, setState }) {
  const {
    dataConsult,
    errorMessage,
    errorsConsult,
    loading,
    fecthingData,
  } = useConsult("dates-trip-without-truck");

  useEffect(() => {
    fecthingData();
  }, []);

  function handleChange(e) {
    setState(null, e.target.value);
  }

  if (loading || loading == null){
    return <Loading/>
  }
  if (errorsConsult !== null && errorsConsult !== 200 && errorsConsult !== 400){
    return <Errors message={errorMessage} />
  }
  if (errorsConsult == 400) {
    return <Errors message={"No hay viajes pendientes por asignar camion"} />;
  }
  return (
    <>
      {dataConsult !== null && (
        <SelectDate
          dates={dataConsult.dates}
          handleChange={handleChange}
          state={state}
        />
      )}
    </>
  );
}

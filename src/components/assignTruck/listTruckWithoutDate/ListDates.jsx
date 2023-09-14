import { useEffect } from "react";
import { useConsult } from "../../../hooks/useConsult";
import { SelectDate } from "../../share/SelectDate";

export function ListDates({ state, setState }) {
  const {
    dataConsult,
    errorsConsult,
    setErrorsConsult,
    loading,
    fecthingData,
  } = useConsult("dates-trip-without-truck");

  useEffect(() => {
    fecthingData();
  }, []);

  function handleChange(e) {
    setState(null, e.target.value);
  }

  return (
    <>
      {dataConsult !== null && (
        <SelectDate dates={dates} handleChange={handleChange} state={state} />
      )}
    </>
  );
}

import { useEffect } from "react";
import { SelectDate } from "../share/SelectDate";

//state, setState -> is of date selected
export function SelectDatesLog({ state, setState }) {
  const {
    dataConsult,
    errorsConsult,
    setErrorsConsult,
    loading,
    fecthingData,
  } = useConsult("dates-trips-without-initialCompany");

  useEffect(() => {
    fecthingData();
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setState(null, value);
  }

  return (
    <>
      {dataConsult !== null && (
        <SelectDate
          dates={dataConsult}
          handleChange={handleChange}
          state={state}
        />
      )}
    </>
  );
}

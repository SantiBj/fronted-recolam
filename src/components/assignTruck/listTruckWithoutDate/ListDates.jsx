import { useEffect } from "react";
import { useConsult } from "../../../hooks/useConsult";

export function ListDates({state,setState}) {
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

  function handleChange(e){
    setState(null,e.target.value)
  }

  return (
    <select onChange={handleChange} value={state} name="date">
      {dataConsult?.dates.map((date) => (
        <option key={date} value={date}>{date}</option>
      ))}
    </select>
  );
}

import { useState, createContext } from "react";
import { useConsult } from "../hooks/useConsult";
import { useNavigate } from "react-router-dom";

export const dataCreateTrip = createContext();

const initalData = {
  scheduleDay: "",
  user: "",
  truck: "",
  address: "",
};

export function CreateTrip({ children }) {
  const [dataTrip, setDataTrip] = useState(initalData);
  const { errorsConsult, loading, fecthingData, setErrorsConsult } = useConsult(
    "trip-create",
    "POST",
    dataTrip
  );

  const navigate = useNavigate();

  function resetCodeStateConsult() {
    setErrorsConsult(null);
  }

  function resetDataTrip() {
    setDataTrip(initalData);
  }

  function successCreateTrip(closeModal) {
    resetCodeStateConsult();
    resetDataTrip();
    closeModal();
    navigate("/create-trip/scheduleDay");
  }

  function errorCreateTrip(closeModal) {
    resetCodeStateConsult();
    closeModal();
  }

  function addValueToKey(key, value) {
    setDataTrip({
      ...dataTrip,
      [key]: value,
    });
  }

  function resetDataSelected(value) {
    if (dataTrip.user !== "") {
      setDataTrip({
        ...dataTrip,
        scheduleDay: value,
        user: "",
        truck: "",
      });
    }
  }

  const values = {
    addValueToKey,
    resetDataSelected,
    dataTrip,
    consult: fecthingData,
    loadingCreate: loading,
    errorsCreate: errorsConsult,
    successCreateTrip,
    errorCreateTrip
  };

  return (
    <dataCreateTrip.Provider value={values}>{children}</dataCreateTrip.Provider>
  );
}

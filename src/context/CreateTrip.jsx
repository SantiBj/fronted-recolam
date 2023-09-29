import { useState, createContext, useRef } from "react";
import { useConsult } from "../hooks/useConsult";
import { useNavigate } from "react-router-dom";

export const dataCreateTrip = createContext();

const initialData = {
  scheduleDay: "",
  user: "",
  truck: "",
  address: "",
};

const initialUrls = {
  scheduleDay: "/create-trip/scheduleDay",
  customer: "/create-trip/customer",
  truck: "/create-trip/truck",
};

export function CreateTrip({ children }) {
  const [dataTrip, setDataTrip] = useState(initialData);
  const urlsDataTripSelected = useRef(initialUrls);

  const {
    errorsConsult,
    errorMessage,
    setErrorMessage,
    loading,
    fecthingData,
    setErrorsConsult,
  } = useConsult("trip-create", "POST");

  const navigate = useNavigate();

  function createTrip() {
    if (dataTrip.address !== "" && dataTrip.truck == "") {
      fecthingData({
        scheduleDay: dataTrip.scheduleDay,
        user: dataTrip.user,
        address: dataTrip.address,
      });
    } else {
      fecthingData(dataTrip);
    }
  }

  function resetCodeStateConsult() {
    setErrorsConsult(null);
    setErrorMessage(null);
  }

  function resetDataTrip() {
    setDataTrip(initialData);
  }

  function successCreateTrip(closeModal) {
    resetCodeStateConsult();
    resetDataTrip();
    resetUrls()
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

  function addUrl(key, value) {
    urlsDataTripSelected.current = {
      ...urlsDataTripSelected.current,
      [key]: value,
    };
  }

  function resetUrls() {
    urlsDataTripSelected.current = initialUrls;
  }

  const values = {
    addValueToKey,
    resetDataSelected,
    dataTrip,
    consult: createTrip,
    loadingCreate: loading,
    errorsCreate: errorsConsult,
    urlsDataTripSelected: urlsDataTripSelected.current,
    addUrl,
    resetUrls,
    successCreateTrip,
    errorCreateTrip,
    errorMessage,
  };

  return (
    <dataCreateTrip.Provider value={values}>{children}</dataCreateTrip.Provider>
  );
}

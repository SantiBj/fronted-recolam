import { useNavigate } from "react-router-dom";
import { useConsult } from "../useConsult";

export function useInitTripCompany(id,closeModal) {
  const navigate = useNavigate();

  const {
    errorsConsult,
    setErrorsConsult,
    errorMessage,
    setErrorMessage,
    loading,
    fecthingData,
  } = useConsult("trip-init-company/" + id, "PATCH");

  function successInitTrip() {
    closeModal();
    setErrorsConsult(null);
    setErrorMessage(null);
    navigate("/trips-without-init/");
  }

  function errorInitTrip() {
    setErrorMessage(null);
    setErrorsConsult(null);
    closeModal();
  }

  return {
    successInitTrip,
    errorInitTrip,
    loading,
    errorMessage,
    errorsConsult,
    fecthingData,
  };
}

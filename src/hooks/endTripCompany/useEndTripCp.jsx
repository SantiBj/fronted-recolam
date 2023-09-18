import { useNavigate } from "react-router-dom";
import { useConsult } from "../useConsult";

export function useEndTripCp(id,closeModal){
    const navigate = useNavigate()

    const {
        errorsConsult,
        setErrorsConsult,
        errorMessage,
        setErrorMessage,
        loading,
        fecthingData,
      }= useConsult("trip-end-company/"+id,"PATCH")

    function successEndTrip(){
        closeModal()
        setErrorsConsult(null)
        setErrorMessage(null)
        navigate("/trip-actives")
    }

    function errorEndTrip() {
        setErrorsConsult(null)
        setErrorMessage(null)
        closeModal()
    }

    return {
        successEndTrip,
        errorEndTrip,
        loading,
        errorMessage,
        errorsConsult,
        fecthingData
    }
}
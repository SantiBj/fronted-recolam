import { useConsult } from "../../hooks/useConsult"

export function ContentModal(){

    const {
        dataConsult,
        setDataConsult,
        errorsConsult,
        setErrorsConsult,
        errorMessage,
        setErrorMessage,
        loading,
        fecthingData,
      } = useConsult("")

    return(
        <div></div>
    )
}
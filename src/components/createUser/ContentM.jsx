import { useNavigate } from "react-router-dom";
import { Loading } from "../share/Loading";
import { useConsult } from "../../hooks/useConsult";
import { useMemo } from "react";

export function ContentM({ role, dataUser, roleSpanish, closeModal }) {
  const navigate = useNavigate();

  console.log(dataUser)
  const dataComplete = useMemo(() => {
    return {
      ...dataUser,
      role,
    };
  }, []);

  console.log(dataComplete)

  const {
    resetAll,
    errorsConsult:stateConsult,
    errorMessage,
    loading:loadingCreate,
    fecthingData:consult,
  } = useConsult("register", "POST", dataComplete);

  function errorCreateTrip() {
    resetAll()
    closeModal();
  }

  function successCreateTrip() {
    closeModal();
    resetAll()
    navigate("/create/user");
  }

  return (
    <div className="flex flex-col items-center justify-between">
      {loadingCreate && <Loading />}
      {stateConsult == null && (
        <>
          <div>img createTrip</div>
          <div>¿ Desea crear el {roleSpanish} ?</div>
          <div className="flex ">
            <button onClick={consult}>Aceptar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </>
      )}
      {stateConsult == 200 && (
        <>
          <div>imagen de exito</div>
          <div>El {roleSpanish} ha sido creado</div>{" "}
          <div className="flex ">
            <button onClick={() => successCreateTrip()}>Aceptar</button>
          </div>
        </>
      )}
      {(stateConsult !== 200) & (stateConsult !== null) && (
        <>
          <div>error</div>
          <div>{errorMessage}</div>{" "}
          <div className="flex ">
            <button onClick={() => errorCreateTrip(closeModal)}>Aceptar</button>
          </div>
        </>
      )}
    </div>
  );
}

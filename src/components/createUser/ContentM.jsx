import { useNavigate } from "react-router-dom";
import { Loading } from "../share/Loading";
import { useConsult } from "../../hooks/useConsult";
import { useMemo } from "react";
import { FaMapLocationDot } from "react-icons/fa6"
import { BtnAcceptM } from "../../"


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
    <div className="flex flex-col items-center justify-center h-full gap-[8px]">
      {loadingCreate && <Loading />}
      {stateConsult == null && (
        <>
          <div className="text-green-600"><FaMapLocationDot size={45}/></div>
          <div>¿ Desea crear el {roleSpanish} ?</div>
          <div className="flex gap-[20px] mt-[20px]">
            <BtnAcceptM action/>
            <button className="bg-green-600 px-[10px] py-[5px] text-white rounded-md" onClick={consult}>Aceptar</button>
            <button className="bg-red-600 px-[10px] py-[5px] text-white rounded-md" onClick={closeModal}>Cancelar</button>
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

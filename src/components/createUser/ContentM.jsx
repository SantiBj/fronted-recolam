import { useNavigate } from "react-router-dom";
import { Loading } from "../share/Loading";
import { useConsult } from "../../hooks/useConsult";
import { useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { BtnAcceptM } from "../share/BtnAcceptM";
import { BtnCancelM } from "../share/BtnCancelM";
import { BiCheckCircle, BiErrorAlt } from "react-icons/bi";

export function ContentM({ role, dataUser, roleSpanish, closeModal }) {
  const navigate = useNavigate();

  useEffect(()=>{
    dataUser.role = role
  },[])

  const {
    resetAll,
    errorsConsult: stateConsult,
    errorMessage,
    loading: loadingCreate,
    fecthingData: consult,
  } = useConsult("register", "POST", dataUser);

  function errorCreateTrip() {
    resetAll();
    closeModal();
  }

  function successCreateTrip() {
    closeModal();
    resetAll();
    navigate("/create/user");
  }

  return (
    <div className="flex flex-col items-center justify-center h-full gap-[8px]">
      {loadingCreate && <Loading />}
      {stateConsult == null && (
        <>
          <div className="text-green-600">
            <FaMapLocationDot size={45} />
          </div>
          <div>¿ Desea crear el {roleSpanish} ?</div>
          <div className="flex gap-[20px] mt-[20px]">
            <BtnAcceptM action={consult} />
            <BtnCancelM action={closeModal} />
          </div>
        </>
      )}
      {stateConsult == 200 && (
        <>
          <div className="text-green-600">
            <BiCheckCircle size={45} />
          </div>
          <div>El {roleSpanish} ha sido creado</div>{" "}
          <div className="flex gap-[20px] mt-[20px]">
            <BtnAcceptM action={successCreateTrip} />
          </div>
        </>
      )}
      {(stateConsult !== 200) & (stateConsult !== null) && (
        <>
          <div className="text-red-500">
            <BiErrorAlt size={45} />
          </div>
          <div>{errorMessage}</div>
          <div className="flex gap-[20px] mt-[20px]">
            <BtnAcceptM action={() => errorCreateTrip(closeModal)} />
          </div>
        </>
      )}
    </div>
  );
}

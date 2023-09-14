import { useNavigate, useParams } from "react-router-dom";
import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { ContentTrucks } from "../../components/assignTruck/ContentTrucks";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { useModal } from "../../hooks/useModal";
import { useConsult } from "../../hooks/useConsult";
import { ContentM } from "../../components/assignTruck/ContentM";

export function TruckAvailable() {
  //buscar el viaje para informacion de este
  const { trip,date } = useParams();
  const { inputs, addValueInputs } = useStateInput({ truck: null }, null);
  const { modal, openModal, closeModal } = useModal();
  const {
    dataConsult,
    errorsConsult,
    setErrorsConsult,
    errorMessage,
    setErrorMessage,
    loading,
    fecthingData,
  } = useConsult(`add-truck-trip/${trip}/${inputs.truck}`,"PATCH");

  const navigate = useNavigate()

  function caseAssignSuccess(){
    closeModal()
    navigate("/assign-truck/list")
  }

  function caseAssignError(){
    setErrorMessage(null)
    setErrorsConsult(null)
    closeModal()
  }

  const text = `¿Desea asignar el camion ${inputs.truck} al viaje ${trip}?`

  return (
    <>
      <ModalGeneric
        content={
          <ContentM
            action={fecthingData}
            stateConsult={errorsConsult}
            closeModal={closeModal}
            successCreateTrip={caseAssignSuccess}
            errorCreateTrip={caseAssignError}
            errorMessage={errorMessage}
            loadingCreate={loading}
            text={text}
          />
        }
        isOpen={modal}
      />
      {inputs.truck !== null && <div>Camion Seleccionado = {inputs.truck}</div>}

      <div>
        <ContentTrucks
          date={date}
          inputs={inputs}
          addValueInputs={addValueInputs}
        />
      </div>
      <button
        onClick={openModal}
        className={`${
          inputs.truck !== null
            ? "opacity-100 pointer-events-auto"
            : "opacity-60 pointer-events-none"
        } bg-green-400 p-[5px]`}
      >
        asignar camion
      </button>
    </>
  );
}

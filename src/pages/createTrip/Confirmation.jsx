import { useContext, useState } from "react";
import { dataCreateTrip } from "../../context/CreateTrip";
import { Navigate } from "react-router-dom";
import { ContentCardsConf } from "../../components/createTrip/ContentCardsConf";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { ContentMCreate } from "../../components/createTrip/ContentMCreate";

export function Confirmation() {
  const [modal, setModal] = useState(false);

  const {
    addValueToKey,
    dataTrip,
    consult,
    loadingCreate,
    errorsCreate,
    successCreateTrip,
    errorCreateTrip,
  } = useContext(dataCreateTrip);

  if (dataTrip.truck === "") {
    return <Navigate to="/create-trip/truck" />;
  }

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <ModalGeneric
        content={
          <ContentMCreate
            consult={consult}
            stateConsult={errorsCreate}
            closeModal={closeModal}
            successCreateTrip={successCreateTrip}
            loadingCreate={loadingCreate}
            errorCreateTrip={errorCreateTrip}
          />
        }
        isOpen={modal}
        close={closeModal}
      />
      <ContentCardsConf dataTrip={dataTrip} addValueToKey={addValueToKey} />
      <button
        onClick={openModal}
        className={`bg-green-400 ${
          dataTrip.address === ""
            ? "opacity-60 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } py-[8px] px-[12px]`}
      >
        crear viaje
      </button>
    </>
  );
}

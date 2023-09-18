import { useParams } from "react-router-dom";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { useEffect } from "react";
import { decrypt } from "../../services/encryptData";
import { useModal } from "../../hooks/useModal";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { ContentModal } from "../../components/tripsWithoutInitCompany/ContentModal";

export function DetailsTrip() {
  const { trip } = useParams();
  const tripDecrypt = decrypt(trip);
  const { modal, openModal, closeModal } = useModal();
  const { dataConsult, errorMessage, errorsConsult, fecthingData, loading } =
    useConsult(`trip/${tripDecrypt}`);

  useEffect(() => {
    fecthingData();
  }, []);


  if (loading || loading == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <article className="space-y-[10px]">
      <ModalGeneric
        isOpen={modal}
        content={<ContentModal closeModal={closeModal} trip={dataConsult} />}
      />
      <section>
        <div>Dia del viaje = {dataConsult.scheduleDay}</div>
        <div>Cliente = {dataConsult.user.name}</div>
        <div>Camion = {dataConsult.truck}</div>
        <div>Direccion = {dataConsult.address}</div>
      </section>
      <section>
        <button
          className={`${
            dataConsult.initialDateCompany !== null &&
            "opacity-60 pointer-events-none"
          } border-green-500 border-[2px] p-[5px]`}
          onClick={openModal}
        >
          Iniciar Viaje
        </button>
      </section>
    </article>
  );
}

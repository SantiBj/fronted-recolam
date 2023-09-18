import { useParams } from "react-router-dom";
import { decrypt } from "../../services/encryptData";
import { useModal } from "../../hooks/useModal";
import { useEffect } from "react";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { formaterDate } from "../../services/formaterDate";
import { ContentModal } from "../../components/tripsActives/ContentModal"

export function DetailsTripActive() {
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
  if (errorsConsult && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  return (
    <article>
      <ModalGeneric
        isOpen={modal}
        content={<ContentModal closeModal={closeModal} trip={dataConsult} />}
      />
      <section>
        <div>Dia del viaje = {dataConsult.scheduleDay}</div>
        <div>Cliente = {dataConsult.user.name}</div>
        <div>Camion = {dataConsult.truck}</div>
        <div>Direccion = {dataConsult.address}</div>
        <div>
          Fecha y hora salida empresa ={" "}
          {formaterDate(dataConsult.initialDateCompany)}
        </div>
        {dataConsult.initialDateCustomer !== null && (
          <div>
            Fecha y hora llegada cliente ={" "}
            {formaterDate(dataConsult.initialDateCustomer)}
          </div>
        )}
        {dataConsult.endDateCustomer !== null && (
          <div>
            Fecha y hora salida cliente ={" "}
            {formaterDate(dataConsult.endDateCustomer)}
          </div>
        )}
      </section>
      <section>
        <button
        onClick={openModal}
          className={`${
            ((dataConsult.endDateCustomer == null) ||
            (dataConsult.endDateCompany == null)) &&
              "opacity-60 pointer-events-none"
          }`}
        >
          Finalizar viaje
        </button>
      </section>
    </article>
  );
}

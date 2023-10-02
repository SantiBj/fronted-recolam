import { useParams } from "react-router-dom";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { decrypt } from "../../services/encryptData";
import { useModal } from "../../hooks/useModal";
import { ModalGeneric } from "../../components/share/ModalGeneric";
import { ContentModal } from "../../components/tripsWithoutInitCompany/ContentModal";
import { useConsult } from "../../hooks/useConsult";
import { useEffect, useMemo } from "react";
import { useQueryParams } from "../../hooks/share/useQueryParams";
import { NavigateBetweenPages } from "../../components/share/NavigateBetweenPages";

//TODO manejar cargas y errores de las dos consultas
export function DetailsTrip() {
  const { trip } = useParams();
  const tripDecrypt = decrypt(trip);
  const { getValueUrl } = useQueryParams();
  const numberPrevPage = useMemo(() => {
    return getValueUrl("page");
  }, []);
  const { modal, openModal, closeModal } = useModal();

  const { dataConsult, errorMessage, errorsConsult, fecthingData, loading } =
    useConsult(`trip/${tripDecrypt}`);

  //validando si el camion esta en otro viaje activo
  const {
    dataConsult: response,
    errorMessage: mssError,
    errorsConsult: status,
    fecthingData: consult,
    loading: loadingConsult,
  } = useConsult(`truck-is-busy/${tripDecrypt}`);

  useEffect(() => {
    consult();
    fecthingData();
  }, []);

  if (loading || loading == null || loadingConsult || loadingConsult == null) {
    return <Loading />;
  }
  if (errorsConsult !== null && errorsConsult !== 200) {
    return <Errors message={errorMessage} />;
  }
  if (status !== null && status !== 200) {
    return <Errors message={mssError} />;
  }
  return (
    <article className="space-y-[10px]">
      <ModalGeneric
        isOpen={modal}
        content={<ContentModal closeModal={closeModal} trip={dataConsult} />}
      />
      <NavigateBetweenPages
        prev={`/trips-without-init/?page=${numberPrevPage}`}
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
          } ${
            response === true && "opacity-60 pointer-events-none"
          } border-green-500 border-[2px] p-[5px]`}
          onClick={openModal}
        >
          Iniciar Viaje
        </button>
      </section>
    </article>
  );
}

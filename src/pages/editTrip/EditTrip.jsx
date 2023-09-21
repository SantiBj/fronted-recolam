import { Link, useParams } from "react-router-dom";
import { decrypt } from "../../services/encryptData";
import { useConsult } from "../../hooks/useConsult";
import { Loading } from "../../components/share/Loading";
import { Errors } from "../../components/share/Errors";
import { useEffect } from "react";


export function EditTrip() {
  const { trip } = useParams();
  const tripDecrypt = decrypt(trip);
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
    <article className="flex flex-col gap-[10px]">
      <section>
        <label htmlFor=""></label>
        <div className="border-black border-[1px]">{dataConsult.id}</div>
        <div className="border-black border-[1px]">{dataConsult.user.name}</div>
      </section>
      <section>
        <label htmlFor="">Direccion:</label>
        <input
          className="border-black border-[1px]"
          type="text"
          value={dataConsult.address}
        />
      </section>
      <section>
        <label htmlFor="">Dia del viaje :</label>
        <input
          className="border-black border-[1px]"
          value={dataConsult.scheduleDay}
        />
      </section>
      <section>
        <label htmlFor="">camion :</label>
        <Link
          to={
            dataConsult.truck == null
              ? `/trip/assign-truck/${trip}/${dataConsult.scheduleDay}`
              : `/trip-edit-truck/${trip}/${dataConsult.truck}`
          }
          className="border-black border-[1px]"
        >
          {dataConsult.truck}
        </Link>
      </section>
    </article>
  );
}

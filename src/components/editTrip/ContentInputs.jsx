import { CustomInput } from "../createTrip/CustomInput";
import { Link } from "react-router-dom";

export function ContentInputs({
  trickEncript,
  errorsInput,
  inputs,
  dataConsult,
  handleChange,
}) {
  return (
    <>
      <section>
        <h3>Id viaje :</h3>
        <div className="border-black border-[1px]">{dataConsult.id}</div>
      </section>
      <section>
        <h3>Cliente :</h3>
        <div className="border-black border-[1px]">{dataConsult.user.name}</div>
      </section>
      <section>
        <CustomInput
          type={"text"}
          placeholder={"Direccion"}
          onChange={handleChange}
          onBlur={() => {}}
          value={inputs.address}
          name={"address"}
          error={errorsInput.address}
        />
      </section>
      <section>
        <CustomInput
          type={"date"}
          placeholder={"Dia del viaje"}
          onChange={handleChange}
          onBlur={() => {}}
          value={inputs.scheduleDay}
          name={"scheduleDay"}
          error={errorsInput.scheduleDay}
        />
      </section>
      <section className="flex gap-[5px] flex-col">
        <label htmlFor="">camion :</label>
        <div>
          {errorsInput.truck !== null && <div>{errorsInput.truck}</div>}
        </div>
        <Link
          to={
            dataConsult.truck == null
              ? `/trip/assign-truck/${trickEncript}/${dataConsult.scheduleDay}`
              : `/trip-edit-truck/${trickEncript}/${dataConsult.truck}`
          }
          className="border-black border-[1px]"
        >
          {dataConsult.truck}
        </Link>
      </section>
    </>
  );
}

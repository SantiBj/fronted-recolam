import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { addAddress } from "../../services/createTrip/addAddress";
import { CardConfirmation } from "./CardConfirmation";
import { CustomInput } from "./CustomInput";
import { useEffect } from "react";
import { useConsult } from "../../hooks/useConsult";
import { useAddressToContext } from "../../hooks/createTrip/useAddressToContext";
import { Loading } from "../share/Loading";
import { Link } from "react-router-dom";

export function ContentCardsConf({
  urlsDataTripSelected,
  dataTrip,
  addValueToKey,
}) {
  const { inputs, errorsInput, addValueInputs, addError } = useStateInput(
    dataTrip.address,
    null
  );

  //añadiendo la direccion del usuario
  const {
    dataConsult: customer,
    errorsConsult,
    errorMessage,
    loading,
    fecthingData,
  } = useConsult("customer/" + dataTrip.user);
  useEffect(() => {
    fecthingData();
  }, []);

  console.log(customer);

  useAddressToContext(customer, addValueToKey, addValueInputs);
  //añadiendo la direccion del usuario

  function handleChange(e) {
    addAddress(
      e,
      addValueToKey,
      addValueInputs,
      addError,
      errorsInput,
      dataTrip
    );
  }

  if (loading || loading == null) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex justify-center gap-[20px] items-center">
        <CardConfirmation
          content={`Dia del viaje ${dataTrip.scheduleDay}`}
          to={urlsDataTripSelected.scheduleDay}
        />
        <Link to={urlsDataTripSelected.customer}>
          <div
            className={`hover:scale-105 transition-all rounded-lg box-border w-[250px] h-[240px] p-[20px] overflow-y-auto bg-white`}
          >
            <img
              src="https://n9.cl/recolam"
              alt="cliente"
              className="w-[100px] bg-slate-300 h-[100px] mx-auto mb-[20px]"
            />
            <p>
              <span className="font-semibold">ID :</span> {customer.id}
            </p>
            <p>
              <span className="font-semibold">Nombre :</span> {customer.name}
            </p>
            <p>
              <span className="font-semibold">N° tel :</span>{" "}
              {customer.numberPhone}
            </p>
          </div>
        </Link>
        <Link to={urlsDataTripSelected.truck}>
          <div className="bg-[#E6E6E6] w-[150px] p-[15px] rounded-lg space-y-[10px] transition-all hover:scale-105">
            <img
              src="https://acortar.link/WA1HsO"
              className="w-[100px] mx-auto"
              alt=""
            />
            <p className="text-center font-semibold">{dataTrip.truck}</p>
          </div>
        </Link>
      </div>

      <CustomInput
        type={"text"}
        placeholder={"Direccion :"}
        onChange={handleChange}
        onBlur={() => {}}
        value={inputs}
        name={"address"}
        error={errorsInput}
      />
    </div>
  );
}

import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { addAddress } from "../../services/createTrip/addAddress";
import { CardConfirmation } from "./CardConfirmation";
import { CustomInput } from "./CustomInput";
import { useEffect } from "react";
import { useConsult } from "../../hooks/useConsult";
import { useAddressToContext } from "../../hooks/createTrip/useAddressToContext";

export function ContentCardsConf({ dataTrip, addValueToKey }) {
  const { inputs, errorsInput, addValueInputs, addError } = useStateInput(
    dataTrip.address,
    null
  );

  //añadiendo la direccion del usuario
  const { dataConsult, errorsConsult, loading, fecthingData } = useConsult(
    "customer-address/" + dataTrip.user
  );
  useEffect(() => {
    fecthingData();
  }, []);
  useAddressToContext(dataConsult, addValueToKey, addValueInputs);
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

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <CardConfirmation
        content={`Dia del viaje ${dataTrip.scheduleDay}`}
        to={"/create-trip/scheduleDay"}
      />
      <CardConfirmation
        content={`Peso estimado en Kg ${dataTrip.weightAvg}`}
        to={"/create-trip/scheduleDay"}
      />
      <CardConfirmation
        content={`Cliente ${dataTrip.user}`}
        to={"/create-trip/customer"}
      />
      <CardConfirmation
        content={`Camión ${dataTrip.truck}`}
        to={"/create-trip/truck"}
      />
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

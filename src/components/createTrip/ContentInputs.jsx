import { CustomInput } from "./CustomInput";
import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { dataInitialScheduleDay } from "../../services/createTrip/dataInitialScheduleDay";
import { handleChangeSchedule } from "../../services/createTrip/handleChangeSchedule";
import { consultAvailableDate } from "../../services/createTrip/consultAvailableDate";

export function ContentInputs({ addValueToKey, resetDataSelected, dataTrip }) {
  const { initialErrors, initialState } = dataInitialScheduleDay(dataTrip);
  const { inputs, errorsInput, addValueInputs, addError } = useStateInput(
    initialState,
    initialErrors
  );
  function handlerChange(e) {
    handleChangeSchedule(
      e,
      addValueToKey,
      resetDataSelected,
      addValueInputs,
      addError,
      dataTrip
    );
  }

  async function consult(date, errors) {
    consultAvailableDate(addError, errors, date, addValueToKey);
  }

  return (
    <div className="flex flex-col gap-2">
      <CustomInput
        type={"date"}
        placeholder={"Fecha del viaje"}
        onChange={handlerChange}
        name={"scheduleDay"}
        value={inputs?.scheduleDay}
        error={errorsInput?.scheduleDay}
        onBlur={() => consult(dataTrip?.scheduleDay, errorsInput)}
      />
      <CustomInput
        type={"number"}
        placeholder={"Peso Estimado Kg :"}
        onChange={handlerChange}
        error={errorsInput?.weightAvg}
        name={"weightAvg"}
        value={inputs?.weightAvg}
        onBlur={() => {}}
      />
    </div>
  );
}

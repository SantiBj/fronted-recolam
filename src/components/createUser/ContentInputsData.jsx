import { useStateInput } from "../../hooks/createTrip/useStateInput";
import { useModal } from "../../hooks/useModal";
import { validationDataCreate } from "../../services/validationDataCreate";
import { InputText } from "../share/InputText";
import { BtnCreateUser } from "./BtnCreateUser";
import { ModalGeneric } from "../share/ModalGeneric";
import { useEffect } from "react";
import { ContentM } from "./ContentM";

const initialData = {
  id: "",
  name: "",
  address: "",
  numberPhone: "",
  role: "",
};

const errorsData = {
  id: null,
  name: null,
  address: null,
  numberPhone: null,
};

export function ContentInputsData({ role,roleSpanish }) {
  const { modal, openModal, closeModal } = useModal();

  const { inputs, errorsInput, addValueInputs, addError } = useStateInput(
    initialData,
    errorsData
  );

  function handleChange(e) {
    const { name, value } = e.target;
    validationDataCreate(name, value, role, addError, errorsInput);
    addValueInputs(name, value.toLowerCase());
  }

  return (
    <main className="flex flex-col gap-[20px]">
      <ModalGeneric
        content={
          <ContentM
            role={role}
            roleSpanish={roleSpanish}
            dataUser={inputs}
            closeModal={closeModal}
          />
        }
        isOpen={modal}
      />

      {(role == "customer" || role == "admin") && (
        <>
          <InputText
            name={"id"}
            label={"Numero de idenficacion :"}
            handleChange={handleChange}
            errors={errorsInput}
            value={inputs.id}
            example={"857946"}
          />
          <InputText
            name={"name"}
            label={"Nombre :"}
            errors={errorsInput}
            value={inputs.name}
            handleChange={handleChange}
            example={"Recolam S.A"}
          />
        </>
      )}
      {role == "customer" && (
        <>
          <InputText
            name={"address"}
            label={"Direccion :"}
            value={inputs.address}
            errors={errorsInput}
            handleChange={handleChange}
            example="Cll 15 #59-90"
          />
          <InputText
            name={"numberPhone"}
            label={"telefono de contacto"}
            value={inputs.numberPhone}
            errors={errorsInput}
            handleChange={handleChange}
            example={"3223669568"}
          />
        </>
      )}
      {role == "truck" && (
        <InputText
          name={"id"}
          label={"Placa :"}
          handleChange={handleChange}
          errors={errorsInput}
          value={inputs.id}
          placeholder="TRJ915"
        />
      )}

      <BtnCreateUser
        openModal={openModal}
        role={role}
        errorsInput={errorsInput}
      />
    </main>
  );
}

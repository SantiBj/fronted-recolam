export function BtnCreateUser({ errorsInput, role, openModal }) {
  return (
    <button
      onClick={openModal}
      className={`${
        (role == "customer" &&
          (errorsInput.id == null ||
            (errorsInput.id !== null && errorsInput.id !== "") ||
            errorsInput.name == null ||
            (errorsInput.name !== null && errorsInput.name !== "") ||
            errorsInput.address == null ||
            (errorsInput.address !== null && errorsInput.address !== "") ||
            errorsInput.numberPhone == null ||
            (errorsInput.numberPhone !== null &&
              errorsInput.numberPhone !== ""))) ||
        (role == "admin" &&
          (errorsInput.id == null ||
            (errorsInput.id !== null && errorsInput.id !== "") ||
            errorsInput.name == null ||
            (errorsInput.name !== null && errorsInput.name !== ""))) ||
        (role == "truck" &&
          (errorsInput.id == null ||
            (errorsInput.id !== null && errorsInput.id !== "")))
          ? "opacity-60 pointer-events-none"
          : ""
      } p-[5px] bg-green-500`}
    >
      crear
    </button>
  );
}

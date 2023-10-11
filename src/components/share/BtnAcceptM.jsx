export function BtnAcceptM({action}) {
  return (
    <button
      className="bg-green-600 px-[10px] py-[5px] text-white rounded-md"
      onClick={action}
    >
      Aceptar
    </button>
  );
}

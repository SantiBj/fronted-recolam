export function CardTruck({ onclick, truck, dataTrip }) {
  return (
    <label
      className={`border-2 ${
        dataTrip.truck === truck.placa ? "border-green-500" : "border-black"
      }`}
      key={truck.placa}
      htmlFor={truck.placa}
    >
      <input
        onClick={onclick}
        type="radio"
        name="truck"
        id={truck.placa}
        value={truck.placa}
      />
      {truck.placa}
    </label>
  );
}

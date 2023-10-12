import { AiOutlineCheckCircle } from "react-icons/ai"

export function CardTruck({ onclick, truck, dataTrip }) {
  return (
    <div
      className={`${
        dataTrip.truck === truck.placa &&
        "border-[2px] rounded-lg border-green-600 p-[5px] w-fit"
      }`}
    >
      <div className="bg-[#E6E6E6] w-[150px] p-[15px] rounded-lg space-y-[10px] transition-all hover:scale-105">
        <label className="relative" key={truck.placa} htmlFor={truck.placa}>
          <input
            className="opacity-0"
            onClick={onclick}
            type="radio"
            name="truck"
            id={truck.placa}
            value={truck.placa}
          />
          <div className={`${dataTrip.truck !== truck.placa && "hidden"} absolute top-0 text-green-600`}>
            <AiOutlineCheckCircle  size={25}/>
          </div>
          <img
            src="https://acortar.link/WA1HsO"
            className="w-[100px] mx-auto"
            alt=""
          />
          <p className="text-center font-semibold">{truck.placa}</p>
        </label>
      </div>
    </div>
  );
}

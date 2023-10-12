import { AiOutlineCheckCircle } from "react-icons/ai";

export function CardCustomer({ customer, dataTrip, onChange }) {
  return (
    <div
      className={`${
        customer.id == dataTrip.user &&
        "border-[2px] rounded-lg border-green-600 p-[5px]"
      }`}
    >
      <div className={`hover:scale-105 rounded-lg box-border w-[250px] h-[240px] p-[20px] overflow-y-auto bg-white`}>
        <label className="relative" key={customer.id} htmlFor={customer.id}>
          <input
            className="opacity-0"
            onChange={onChange}
            type="radio"
            name="user"
            value={customer.id}
            id={customer.id}
          ></input>
          <div className={`${customer.id != dataTrip.user && "hidden"} absolute top-0 text-green-600`}>
            <AiOutlineCheckCircle  size={25}/>
          </div>
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
        </label>
      </div>
    </div>
  );
}

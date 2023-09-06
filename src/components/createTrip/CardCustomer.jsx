export function CardCustomer({customer,dataTrip,onChange}) {
  return (
    <label
      key={customer.id}
      className={`border-2 ${
        dataTrip.customer === customer.id ? "border-green-500" : "border-black"
      }`}
      htmlFor={customer.id}
    >
      <input
        onChange={onChange}
        type="radio"
        name="customer"
        value={customer.id}
        id={customer.id}
      />
      {customer.name}
    </label>
  );
}

export function CardCustomer({customer,dataTrip,onChange}) {
  return (
    <label
      key={customer.id}
      className={`border-2 ${
        dataTrip.user === customer.id ? "border-green-500" : "border-black"
      }`}
      htmlFor={customer.id}
    >
      <input
        onChange={onChange}
        type="radio"
        name="user"
        value={customer.id}
        id={customer.id}
      />
      {customer.name}
    </label>
  );
}

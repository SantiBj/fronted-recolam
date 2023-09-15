export function SelectDate({ dates, handleChange, state }) {
  return (
    <select onChange={handleChange} value={state} >
      <option value="">---</option>
      {dates.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  );
}

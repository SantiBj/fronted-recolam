export function InputText({
  name,
  label,
  value,
  example,
  errors,
  handleChange,
}) {
  return (
    <section className="flex flex-col gap-[3px]">
      <label className="">{label}</label>
      <input
        onChange={handleChange}
        required
        className={`p-[5px] ${
          name !== "id" && "capitalize"
        } border-gray-200 border-[2px] rounded-lg`}
        type="text"
        value={value}
        name={name}
        placeholder={example}
      />
      <div className="text-red-500 text-[14px]">
        {errors[name] && <p>{errors[name]}</p>}
      </div>
    </section>
  );
}

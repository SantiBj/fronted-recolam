export function CustomInput({
    type,
    placeholder,
    onChange,
    onBlur,
    value,
    name,
    error,
}) {
    return (
        <div className="flex flex-col">
            <label>{placeholder} :</label>
            <input
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                value={value}
                name={name}
            />
            <div>{error !== null && error}</div>
        </div>
    );
}

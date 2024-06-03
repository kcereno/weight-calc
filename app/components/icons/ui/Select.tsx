type SelectProps = {
  name: string;
  options: string[];
  onChange: (name: string, value: string) => void;
};

function Select({ name, options, onChange }: SelectProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    onChange(name, selectedValue);
  };
  return (
    <div className="my-2">
      <select
        className="select select-bordered"
        onChange={handleInputChange}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

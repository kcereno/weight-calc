type ButtonSelectProps<T> = {
  name: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
};

function ButtonSelect<T>({
  name,
  value,
  options,
  onChange,
}: ButtonSelectProps<T>) {
  const handleButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value as T);
  };
  return (
    <div>
      <h3>{name}</h3>
      <div className="join my-2">
        {options.map((option) => (
          <input
            key={option as string}
            className="join-item btn btn-outline"
            type="checkbox"
            name="name"
            value={option as string}
            aria-label={option as string}
            checked={value == option}
            onChange={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}

export default ButtonSelect;

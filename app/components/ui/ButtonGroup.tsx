type ButtonGroupProps<T> = {
  name: string;
  values: T[];
  options: T[];
  optionType?: 'string' | 'number';
  onChange: (value: T[]) => void;
};

function ButtonGroup<T>({
  name,
  values,
  options,
  onChange,
  optionType = 'string',
}: ButtonGroupProps<T>) {
  const handleButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue =
      optionType === 'string'
        ? (e.target.value as T)
        : (parseFloat(e.target.value) as T);

    let updatedValues = values.includes(selectedValue)
      ? values.filter((value) => value !== selectedValue)
      : [...values, selectedValue];

    if (optionType === 'number') {
      updatedValues = updatedValues.sort(
        (a: T, b: T) => (b as number) - (a as number)
      );
    }

    onChange(updatedValues as T[]);
  };

  return (
    <div>
      <h3>{name}</h3>
      <div className="join my-2">
        {options.map((option) => {
          return (
            <input
              key={option as string}
              className="join-item btn btn-outline"
              type="checkbox"
              name="name"
              value={option as string}
              aria-label={option as string}
              checked={values.includes(option)}
              onChange={handleButtonClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ButtonGroup;

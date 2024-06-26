import React from 'react';

export type ButtonGroupInputProps<T> = {
  values: T[];
  options: T[];
  optionType?: 'string' | 'number';
  onChange: (newValue: T[]) => void;
};

function ButtonGroupInput<T>({
  values,
  options,
  onChange,
  optionType = 'string',
}: ButtonGroupInputProps<T>) {
  const handleButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue =
      optionType === 'string'
        ? (e.target.value as T)
        : (parseFloat(e.target.value) as T);

    let newValues = values.includes(selectedValue)
      ? values.filter((value) => value !== selectedValue)
      : [...values, selectedValue];

    if (optionType === 'number') {
      newValues = newValues.sort((a: T, b: T) => (b as number) - (a as number));
    }
    console.log(newValues);

    onChange(newValues as T[]);
  };
  return (
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
  );
}

export default ButtonGroupInput;

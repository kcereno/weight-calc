import React from 'react';

export type SelectInputProps<T> = {
  options: T[];
  onChange: (newValue: T) => void;
  defaultValue: T;
};

function SelectInput<T>({
  options,
  onChange,
  defaultValue,
}: SelectInputProps<T>) {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(newValue as T);
  };

  return (
    <select
      className="select select-bordered"
      onChange={handleSelect}
      defaultValue={defaultValue as number}
    >
      {options.map((option) => (
        <option
          key={option as string}
          value={option as string}
        >
          {option as string}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;

import React from 'react';

export type ButtonSelectProps<T> = {
  options: T[];
  onChange: (value: T) => void;
  value: T;
};

function ButtonSelect<T>({ options, onChange, value }: ButtonSelectProps<T>) {
  const handleButtonSelectClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue as T);
  };

  return (
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
          onChange={handleButtonSelectClick}
        />
      ))}
    </div>
  );
}

export default ButtonSelect;

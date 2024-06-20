import { twMerge } from 'tailwind-merge';

type SelectProps<T> = {
  name: string;
  value: T;
  className?: string;
  options: T[];
  onChange: (updatedValue: T) => void;
};

function Select<T>({
  name,
  options,
  onChange,
  className,
  value,
}: SelectProps<T>) {
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    onChange(selectedValue as T);
  };
  return (
    <div className={twMerge('my-2', className)}>
      <label className="form-control w-full">
        <span className="mb-1">{name}</span>
        <select
          className="select select-bordered"
          onChange={handleInputChange}
          defaultValue={value as number}
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
      </label>
    </div>
  );
}

export default Select;

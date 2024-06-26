import { twMerge } from 'tailwind-merge';
import SelectInput, {
  SelectInputProps,
} from '~/components/atoms/inputs/SelectInput';

type SelectInputFieldProps<T> = SelectInputProps<T> & {
  name: string;
  className?: string;
  value: T;
};

function SelectInputField<T>({
  name,
  options,
  onChange,
  className,
  value,
}: SelectInputFieldProps<T>) {
  const handleInputChange = (newValue: T) => {
    onChange(newValue as T);
  };
  return (
    <div className={twMerge('my-2', className)}>
      <label className="form-control w-full">
        <span className="mb-1">{name}</span>
        <SelectInput
          options={options}
          defaultValue={value}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

export default SelectInputField;

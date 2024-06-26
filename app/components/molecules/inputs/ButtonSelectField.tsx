import ButtonSelect from '~/components/atoms/inputs/ButtonSelect';

type ButtonSelectFieldProps<T> = {
  name: string;
  value: T;
  options: T[];
  onChange: (value: T) => void;
};

function ButtonSelectField<T>({
  name,
  value,
  options,
  onChange,
}: ButtonSelectFieldProps<T>) {
  return (
    <div>
      <h3>{name}</h3>
      <ButtonSelect
        options={options}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default ButtonSelectField;

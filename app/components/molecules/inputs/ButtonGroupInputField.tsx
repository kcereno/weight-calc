import ButtonGroupInput, {
  ButtonGroupInputProps,
} from '~/components/atoms/inputs/ButtonGroupInput';
type ButtonGroupInputFieldProps<T> = ButtonGroupInputProps<T> & {
  name: string;
};

function ButtonGroupInputField<T>({
  name,
  onChange,
  options,
  values,
  optionType,
}: ButtonGroupInputFieldProps<T>) {
  return (
    <div>
      <h3>{name}</h3>
      <ButtonGroupInput
        options={options}
        onChange={onChange}
        values={values}
        optionType={optionType}
      />
    </div>
  );
}

export default ButtonGroupInputField;

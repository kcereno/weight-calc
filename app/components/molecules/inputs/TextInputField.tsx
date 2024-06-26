import { twMerge } from 'tailwind-merge';
import TextInput, { TextInputProps } from '~/components/atoms/inputs/TextInput';
import { capitalizeFirstLetter } from '~/utils/transformers';

type TextInputFieldProps = TextInputProps & {
  name: string;
  errorMessage?: string;
  isValid?: boolean;
  className?: string;
};

function TextInputField({
  name,
  type = 'text',
  value,
  onChange,
  errorMessage,
  className = '',
  isValid = true,
}: TextInputFieldProps) {
  const handleValueChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <div className={twMerge('my-2 flex-1', className)}>
      <label className="form-control w-full">
        <span className="mb-1">{capitalizeFirstLetter(name)}</span>
        <TextInput
          value={value}
          type={type}
          onChange={handleValueChange}
          isValid={isValid}
        />
        {!isValid && (
          <div className="label">
            <span className="label-text-alt text-error">{errorMessage}</span>
          </div>
        )}
      </label>
    </div>
  );
}

export default TextInputField;

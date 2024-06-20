import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { capitalizeFirstLetter } from '~/utils/transformers';

type TextInputProps = {
  name: string;
  value: string;
  className?: string;
  type?: string;
  onChange: (updatedValue: string) => void;
  errorMessage?: string;
  isValid?: boolean;
};

function TextInput({
  name,
  type = 'text',
  value,
  onChange,
  className,
  isValid = true,
  errorMessage = '',
}: TextInputProps) {
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    onChange(input);
  };

  return (
    <div className={twMerge('my-2', className)}>
      <label className="form-control w-full">
        <span className="mb-1">{capitalizeFirstLetter(name)}</span>
        <input
          type={type}
          className={`input input-bordered w-full ${
            !isValid && isTouched ? 'input-error' : ''
          }`}
          value={(value as string) || ''}
          onChange={handleInputChange}
          onFocus={() => {
            setIsTouched(true);
          }}
          min={0}
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

export default TextInput;

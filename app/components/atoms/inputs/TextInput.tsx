import React, { useRef, useState } from 'react';

export type TextInputProps = {
  value: string | number | undefined;
  type?: string;
  onChange: (value: string) => void;
  isValid?: boolean;
};
function TextInput({
  type = 'text',
  value,
  onChange,
  isValid = true,
}: TextInputProps) {
  const [isTouched, setIsTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const handleFocus = () => {
    setIsTouched(true);
    inputRef.current?.select();
  };

  return (
    <input
      type={type}
      className={`input input-bordered w-full ${
        !isValid && isTouched ? 'input-error' : ''
      }`}
      value={(value as string) || ''}
      onChange={handleTextInputChange}
      ref={inputRef}
      onFocus={handleFocus}
      min={0}
    />
  );
}

export default TextInput;

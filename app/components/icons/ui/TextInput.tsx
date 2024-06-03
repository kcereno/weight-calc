import { capitalizeFirstLetter } from '~/utils/transformers';

type TextInputProps = {
  name: string;
  value: string | number | undefined;
  type?: string;
  onChange: (name: string, value: string) => void;
};

function TextInput({ name, type = 'text', value, onChange }: TextInputProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    onChange(name, input);
  };

  return (
    <div className="my-2 flex-1">
      <label className="form-control w-full">
        <span className="mb-1">{capitalizeFirstLetter(name)}</span>
        <input
          type={type}
          className="input input-bordered w-full"
          value={value}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}

export default TextInput;

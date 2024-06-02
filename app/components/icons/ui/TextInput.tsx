type TextInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

function TextInput({ label, type = 'text', placeholder }: TextInputProps) {
  return (
    <div className="my-2 flex-1">
      <label className="form-control w-full">
        <span className="mb-1">{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
      </label>
    </div>
  );
}

export default TextInput;

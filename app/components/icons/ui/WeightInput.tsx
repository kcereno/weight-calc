import TextInput from './TextInput';
import Select from './Select';

function WeightInput() {
  return (
    <div className="flex items-end">
      <TextInput label="Weight" />
      <Select />
    </div>
  );
}

export default WeightInput;

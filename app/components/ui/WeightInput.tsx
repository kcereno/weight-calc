import TextInput from './TextInput';
import Select from './Select';
import { WeightUnit } from '~/types/weight';
import { weightUnits } from '~/constants/weights';

type WeightInputProps = {
  value: { weight: string; type: WeightUnit };
  onChange: (name: string, value: string) => void;
};

function WeightInput({ onChange, value }: WeightInputProps) {
  return (
    <div className="flex items-end">
      <TextInput
        name="weight"
        value={value.weight}
        onChange={onChange}
        type="number"
      />
      <Select
        name={'weightType'}
        options={weightUnits}
        onChange={onChange}
      />
    </div>
  );
}

export default WeightInput;

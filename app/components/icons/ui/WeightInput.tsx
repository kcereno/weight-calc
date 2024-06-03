import TextInput from './TextInput';
import Select from './Select';
import { WeightType } from '~/types/Data';

type WeightInputProps = {
  value: { weight: string; type: WeightType };
  onChange: (name: string, value: string) => void;
};

function WeightInput({ onChange, value }: WeightInputProps) {
  const weightTypes: WeightType[] = ['lbs', 'kgs'];

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
        options={weightTypes}
        onChange={onChange}
      />
    </div>
  );
}

export default WeightInput;

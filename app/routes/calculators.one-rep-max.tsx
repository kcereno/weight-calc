import { useState } from 'react';
import CalculatorHeader from '~/components/CalculatorHeader';

import TextInput from '~/components/icons/ui/TextInput';
import WeightInput from '~/components/icons/ui/WeightInput';
import Layout from '~/components/Layout';
import OneRepMaxTable from '~/components/tables/OneRepMaxTable';
import { WeightUnit } from '~/types/weight';

import { calculateOneRepMax, generateLiftData } from '~/utils/calculators';

function OneRepMaxCalculator() {
  const [formData, setFormData] = useState<{
    weight: string;
    repetitions: string;
    weightType: WeightUnit;
  }>({
    weight: '',
    repetitions: '',
    weightType: 'lb',
  });

  const [oneRepMax, setOneRepMax] = useState<number>(0);

  const handleInputChange = (name: string, value: number | string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const updated1RM = calculateOneRepMax(
      parseFloat(formData.weight),
      parseFloat(formData.repetitions)
    );

    setOneRepMax(updated1RM);
  };

  const liftData = generateLiftData(oneRepMax, formData.weightType);

  const isDisabled =
    formData.weight === '' ||
    formData.repetitions === '' ||
    parseFloat(formData.weight) <= 0 ||
    parseFloat(formData.repetitions) <= 0;

  return (
    <Layout className="p-6">
      <CalculatorHeader
        heading="One Rep Max Calculator"
        description="Calculate the maximum weight you can lift for one repetition"
      />

      <div className="my-6">
        <WeightInput
          onChange={handleInputChange}
          value={{
            weight: formData.weight,
            type: formData.weightType,
          }}
        />
        <TextInput
          name={'repetitions'}
          value={formData.repetitions}
          onChange={handleInputChange}
          type="number"
        />
        <button
          className="btn btn-block btn-primary mt-4"
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          Calculate One Rep Max
        </button>
      </div>

      {oneRepMax > 0 ? <OneRepMaxTable data={liftData} /> : null}
    </Layout>
  );
}

export default OneRepMaxCalculator;

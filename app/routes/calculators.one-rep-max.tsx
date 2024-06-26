import { useState } from 'react';
import TextInputField from '~/components/molecules/inputs/TextInputField';
import OneRepMaxTable from '~/components/organisms/tables/OneRepMaxTable';
import CalculatorTemplate from '~/components/templates/CalculatorTemplate';
import { WeightUnit } from '~/types/weight';
import {
  calculateOneRepMax,
  calculateOneRepMaxTableData,
} from '~/utils/calculators';

function OneRepMaxCalculator() {
  const [oneRepMax, setOneRepMax] = useState<number>(0);
  const [form, setForm] = useState<{
    weight: string;
    repetitions: string;
    weightType: WeightUnit;
  }>({
    weight: '225',
    repetitions: '3',
    weightType: 'lb',
  });

  // Handlers
  const handleWeightChange = (newValue: string) => {
    const updatedForm = { ...form, weight: newValue };
    setForm(updatedForm);
  };

  const handleRepetitionChange = (newValue: string) => {
    const updatedForm = { ...form, repetitions: newValue };
    setForm(updatedForm);
  };

  const handleSubmit = () => {
    const updated1RM = calculateOneRepMax(
      parseFloat(form.weight),
      parseFloat(form.repetitions)
    );

    setOneRepMax(updated1RM);
  };

  // Helpers
  const oneRepMaxTableData = calculateOneRepMaxTableData(oneRepMax);

  const isDisabled =
    form.weight === '' ||
    form.repetitions === '' ||
    parseFloat(form.weight) <= 0 ||
    parseFloat(form.repetitions) <= 0;

  return (
    <CalculatorTemplate
      heading="One Rep Max Calculator"
      description="Calculate the maximum weight you can lift for one repetition"
    >
      <div className="my-6">
        <TextInputField
          name="weight"
          value={form.weight}
          onChange={handleWeightChange}
          type="number"
        />

        <TextInputField
          name={'repetitions'}
          value={form.repetitions}
          onChange={handleRepetitionChange}
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

      {oneRepMax > 0 ? <OneRepMaxTable data={oneRepMaxTableData} /> : null}
    </CalculatorTemplate>
  );
}

export default OneRepMaxCalculator;

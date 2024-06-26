import { useState } from 'react';
import CalculatorHeader from '~/components/CalculatorHeader';
import Card from '~/components/Card';
import Layout from '~/components/Layout';
import Select from '~/components/ui/Select';
import TextInput from '~/components/ui/TextInput';
import { WarmUpInputForm } from '~/types/forms';
import { WarmUpSet, WarmupSetOption, WorkingSetRepRange } from '~/types/sets';
import { calculateWarmUpSets } from '~/utils/calculators';

function WarmUpCalculator() {
  const [warmupInputForm, setWarmupInputForm] = useState<WarmUpInputForm>({
    workingSetRepRange: '1-5 (Strength)',
    warmupSetOption: '5 (Ideal for Strength Training)',
    workingSetWeight: 225,
  });
  const [warmupSets, setWarmupSets] = useState<WarmUpSet[] | null>(null);

  const workingSetRepRanges: WorkingSetRepRange[] = [
    '1-5 (Strength)',
    '6-12 (Hypertrophy)',
    '12+ (Endurance)',
  ];

  const warmupSetOptions: WarmupSetOption[] = [
    '3 (Ideal for Hypertrophy and Endurance Training)',
    '4 (Ideal for All Training',
    '5 (Ideal for Strength Training)',
  ];

  // Helpers
  const formIsValid = warmupInputForm.workingSetWeight > 0;

  // Handlers
  const handleWorkingSetWeightChange = (value: string) => {
    setWarmupInputForm({
      ...warmupInputForm,
      workingSetWeight: parseInt(value),
    });
  };

  const handleWorkingSetRepRangeChange = (value: WorkingSetRepRange) => {
    setWarmupInputForm({ ...warmupInputForm, workingSetRepRange: value });
  };

  const handleWarmupSetChange = (value: WarmupSetOption) => {
    setWarmupInputForm({ ...warmupInputForm, warmupSetOption: value });
  };

  const handleCalculateButtonClick = () => {
    const warmupSets = calculateWarmUpSets(warmupInputForm);
    setWarmupSets(warmupSets);
  };

  return (
    <Layout>
      <CalculatorHeader
        heading="Warmup Calculator"
        description="Generate personalized warm-up sets based on your training goal, exercise type, working weight, and reps to optimize your workout preparation"
      />
      <div className="my-6 space-y-4">
        <TextInput
          name="Working Set Weight"
          value={warmupInputForm.workingSetWeight.toLocaleString()}
          onChange={handleWorkingSetWeightChange}
          isValid={warmupInputForm.workingSetWeight > 0}
          errorMessage="Must be greater than 0"
          type="number"
        />
        <Select
          name="Working Set Reps"
          options={workingSetRepRanges}
          value={warmupInputForm.workingSetRepRange}
          onChange={handleWorkingSetRepRangeChange}
        />

        <Select
          name="Warmup Sets"
          options={warmupSetOptions}
          value={warmupInputForm.warmupSetOption}
          onChange={handleWarmupSetChange}
        />
      </div>
      <button
        className="btn btn-primary"
        disabled={!formIsValid}
        onClick={handleCalculateButtonClick}
      >
        Calculate
      </button>

      {warmupSets && (
        <Card className="my-10">
          <table className="table text-center table-xs">
            <thead>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>% of WW</th>
              </tr>
            </thead>
            <tbody>
              {warmupSets.map((set, index) => (
                <tr
                  className="items-center"
                  key={index}
                >
                  <th>{index + 1}</th>
                  <th>{set.weight}</th>
                  <th>{set.reps}</th>
                  <th>{set.percentage}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </Layout>
  );
}

export default WarmUpCalculator;

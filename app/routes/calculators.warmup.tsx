import { useState } from 'react';
import CalculatorHeader from '~/components/CalculatorHeader';
import Card from '~/components/Card';
import Layout from '~/components/Layout';
import Select from '~/components/ui/Select';
import TextInput from '~/components/ui/TextInput';

type WorkingSetRepRange =
  | '1-5 (Strength)'
  | '6-12 (Hypertrophy)'
  | '12+ (Endurance)';

type WarmupSetOption =
  | '3 (Ideal for Hypertrophy and Endurance Training)'
  | '4 (Ideal for All Training'
  | '5 (Ideal for Strength Training)';

type WarmUpInputForm = {
  warmupSetOption: WarmupSetOption;
  workingSetWeight: number;
  workingSetRepRange: WorkingSetRepRange;
};

interface WarmUpSet {
  weight: number | 'BAR';
  reps: string | number;
  percentage?: number; // Include percentage of the working set weight
}

function calculateWarmUpSets(input: WarmUpInputForm): WarmUpSet[] {
  const warmUpSets: WarmUpSet[] = [];

  // Add the bar only set
  warmUpSets.push({
    weight: 'BAR',
    reps:
      input.workingSetRepRange === '1-5 (Strength)'
        ? '5-10'
        : input.workingSetRepRange === '6-12 (Hypertrophy)'
        ? '8-10'
        : '10-12',
    percentage: 0, // Bar only set doesn't have a percentage of working set weight
  });

  if (input.workingSetRepRange === '1-5 (Strength)') {
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.4 * 10) / 10,
      reps: 5,
      percentage: 40,
    });
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.6 * 10) / 10,
      reps: 4,
      percentage: 60,
    });
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.75 * 10) / 10,
      reps: 3,
      percentage: 75,
    });
    if (input.warmupSetOption === '5 (Ideal for Strength Training)') {
      warmUpSets.push({
        weight: Math.round(input.workingSetWeight * 0.85 * 10) / 10,
        reps: 2,
        percentage: 85,
      });
    }
  } else if (input.workingSetRepRange === '6-12 (Hypertrophy)') {
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.5 * 10) / 10,
      reps: 8,
      percentage: 50,
    });
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.65 * 10) / 10,
      reps: 6,
      percentage: 65,
    });
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.8 * 10) / 10,
      reps: 4,
      percentage: 80,
    });
  } else if (input.workingSetRepRange === '12+ (Endurance)') {
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.5 * 10) / 10,
      reps: 10,
      percentage: 50,
    });
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.6 * 10) / 10,
      reps: 8,
      percentage: 60,
    });
    warmUpSets.push({
      weight: Math.round(input.workingSetWeight * 0.7 * 10) / 10,
      reps: 6,
      percentage: 70,
    });
  }

  return warmUpSets;
}

function WarmUpCalculator() {
  const [warmupInputForm, setWarmupInputForm] = useState<WarmUpInputForm>({
    workingSetRepRange: '1-5 (Strength)',
    warmupSetOption: '5 (Ideal for Strength Training)',
    workingSetWeight: 225,
  });
  const [warmupSets, setWarmupSets] = useState<WarmUpSet[] | null>(null);
  console.log('WarmUpCalculator ~ warmupSets:', warmupSets);

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

  // console.log('WarmUpCalculator ~ warmupInputForm:', warmupInputForm);
  return (
    <Layout className="p-6">
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
          <table className="table text-center">
            <thead>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>% of Working Weight</th>
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

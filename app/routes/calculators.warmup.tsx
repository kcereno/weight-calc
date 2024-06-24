import React, { useState } from 'react';
import CalculatorHeader from '~/components/CalculatorHeader';
import Layout from '~/components/Layout';
import Select from '~/components/ui/Select';
import TextInput from '~/components/ui/TextInput';

type TrainingGoal = 'Hypertrophy' | 'Strength';
type ExerciseType = 'Squat' | 'Hinge' | 'Press' | 'Pull';

type WarmUpInputForm = {
  trainingGoal: TrainingGoal;
  warmupSets: string;
  exerciseType: ExerciseType;
  workingWeight: number;
  repetitions: number;
};

function WarmUpCalculator() {
  const [warmupInputForm, setWarmupInputForm] = useState<WarmUpInputForm>({
    trainingGoal: 'Hypertrophy',
    warmupSets: '3',
    exerciseType: 'Squat',
    workingWeight: 225,
    repetitions: 4,
  });

  const trainingGoals: TrainingGoal[] = ['Hypertrophy', 'Strength'];
  const exerciseTypes: ExerciseType[] = ['Squat', 'Hinge', 'Press', 'Pull'];

  // Helpers
  const formIsValid =
    warmupInputForm.workingWeight > 0 && warmupInputForm.repetitions > 0;

  // Handlers
  const handleTrainingGoalChange = (value: TrainingGoal) => {
    setWarmupInputForm({ ...warmupInputForm, trainingGoal: value });
  };

  const handleWarmupSetsChange = (value: string) => {
    setWarmupInputForm({ ...warmupInputForm, warmupSets: value });
  };

  const handleExerciseTypeChange = (value: ExerciseType) => {
    setWarmupInputForm({ ...warmupInputForm, exerciseType: value });
  };

  const handleWorkingWeightChange = (value: string) => {
    setWarmupInputForm({ ...warmupInputForm, workingWeight: parseInt(value) });
  };

  const handleRepetitionsChange = (value: string) => {
    setWarmupInputForm({ ...warmupInputForm, repetitions: parseInt(value) });
  };

  console.log('WarmUpCalculator ~ warmupInputForm:', warmupInputForm);
  return (
    <Layout className="p-6">
      <CalculatorHeader
        heading="Warmup Calculator"
        description="lorem30"
      />
      <div className="my-6 space-y-4">
        <div className="flex gap-2">
          <Select
            className="flex-1"
            name="Training Goal"
            options={trainingGoals}
            value={warmupInputForm.trainingGoal}
            onChange={handleTrainingGoalChange}
          />
          <Select
            className="flex-1"
            name="Warmup Sets"
            options={['3', '4', '5']}
            value={warmupInputForm.warmupSets}
            onChange={handleWarmupSetsChange}
          />
        </div>

        <Select
          name="Exercise Type"
          options={exerciseTypes}
          value={'Squat'}
          onChange={handleExerciseTypeChange}
        />
        <div className="flex gap-2">
          <TextInput
            className="flex-1"
            name="Working Weight"
            value={warmupInputForm.workingWeight.toLocaleString()}
            onChange={handleWorkingWeightChange}
            isValid={warmupInputForm.workingWeight > 0}
            errorMessage="Must be greater than 0"
            type="number"
          />
          <TextInput
            className="flex-1"
            name="Repetitions"
            value={warmupInputForm.repetitions.toLocaleString()}
            onChange={handleRepetitionsChange}
            isValid={warmupInputForm.workingWeight > 0}
            errorMessage="Must be greater than 0"
            type="number"
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        disabled={!formIsValid}
      >
        Calculate
      </button>
    </Layout>
  );
}

export default WarmUpCalculator;

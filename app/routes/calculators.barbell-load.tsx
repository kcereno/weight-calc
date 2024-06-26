import { useState } from 'react';
import ButtonGroup from '~/components/ui/ButtonGroup';
import ButtonSelect from '~/components/ui/ButtonSelect';
import Select from '~/components/ui/Select';
import TextInput from '~/components/ui/TextInput';
import { percentages } from '~/constants/misc';
import {
  defaultKgBarWeight,
  defaultKgPlates,
  defaultLbBarWeight,
  defaultLbPlates,
  weightUnits,
} from '~/constants/weights';
import { BarbellLoadForm } from '~/types/forms';
import {
  BarbellLoadData,
  BarBellLoadEntry,
  BarWeight,
  Plate,
  WeightUnit,
} from '~/types/weight';

import { getBarWeights, getPlates } from '~/utils/getters';
import { calculateBarbellLoad } from '~/utils/calculators';
import BarbellLoadTable from '~/components/tables/BarbellLoadTable';
import {
  INITIAL_BARBELL_LOAD_DATA_KG,
  INITIAL_BARBELL_LOAD_DATA_LB,
  INITIAL_BARBELL_LOAD_FORM,
} from '~/constants/initialValues';
import Layout from '~/components/Layout';
import CalculatorHeader from '~/components/CalculatorHeader';

function BarbellLoadCalculator() {
  const [form, setForm] = useState<BarbellLoadForm>(INITIAL_BARBELL_LOAD_FORM);
  const [barbellLoadData, setBarbellLoadData] = useState<BarbellLoadData>(
    INITIAL_BARBELL_LOAD_DATA_LB
  );

  // Helper Variables
  const plates: Plate[] = getPlates(form.weightUnit);
  const barWeights: BarWeight[] = getBarWeights(form.weightUnit);

  // Handlers
  const handleTargetWeightChange = (updatedTargetWeight: string) => {
    const updatedForm = {
      ...form,
      targetWeight: parseInt(updatedTargetWeight),
    };
    setForm(updatedForm);
  };

  const handlePercentageChange = (updatedPercentage: number) => {
    const updatedForm = { ...form, percentage: updatedPercentage };
    setForm(updatedForm);
  };

  const handleWeightUnitChange = (updatedWeightUnit: WeightUnit) => {
    const currentWeightUnit = form.weightUnit;

    if (currentWeightUnit === updatedWeightUnit) return;

    const updatedForm: BarbellLoadForm = {
      ...form,
      barWeight:
        currentWeightUnit === 'kg' ? defaultLbBarWeight : defaultKgBarWeight,
      plates: currentWeightUnit === 'kg' ? defaultLbPlates : defaultKgPlates,
      weightUnit: updatedWeightUnit,
      targetWeight: currentWeightUnit === 'kg' ? 45 : 20,
    };

    setForm(updatedForm);

    setBarbellLoadData(
      currentWeightUnit === 'kg'
        ? INITIAL_BARBELL_LOAD_DATA_LB
        : INITIAL_BARBELL_LOAD_DATA_KG
    );
  };

  const handleBarWeightChange = (updatedBarWeight: BarWeight) => {
    const updateForm: BarbellLoadForm = {
      ...form,
      barWeight: updatedBarWeight,
    };

    setForm(updateForm);
  };

  const handlePlateChange = (updatedPlates: Plate[]) => {
    const updateForm: BarbellLoadForm = {
      ...form,
      plates: updatedPlates,
    };

    setForm(updateForm);
  };

  const handleCalculateButtonClick = () => {
    const updatedPercentageWeight = parseFloat(
      (form.targetWeight * (form.percentage / 100)).toFixed(1)
    );

    const updatedLoad = calculateBarbellLoad(
      updatedPercentageWeight,
      form.barWeight,
      form.plates
    );

    const updatedBarbellLoadData: BarbellLoadData = {
      barWeight: form.barWeight,
      load: updatedLoad,
      targetWeight: updatedPercentageWeight,
    };

    setBarbellLoadData(updatedBarbellLoadData);
  };

  const handleUpdateBarbellLoadEntry = (
    updatedBarbellLoadEntry: BarBellLoadEntry
  ) => {
    if (!barbellLoadData.load) return;

    const updatedBarbellLoad = barbellLoadData.load.map((entry) =>
      entry.plate === updatedBarbellLoadEntry.plate
        ? updatedBarbellLoadEntry
        : entry
    );

    setBarbellLoadData({ ...barbellLoadData, load: updatedBarbellLoad });
  };

  // Validators
  const targetWeightIsValid = form.targetWeight >= form.barWeight;

  return (
    <Layout>
      <CalculatorHeader
        heading="Barbell Load Calculator"
        description="Calculate the plates you need to load on your barbell"
      />
      <div className="my-6">
        <div className="flex gap-2">
          <TextInput
            className="flex-1"
            name="Target Weight"
            value={form.targetWeight.toLocaleString()}
            onChange={handleTargetWeightChange}
            isValid={targetWeightIsValid}
            errorMessage="Target weight must be greater than or equal to bar weight"
            type="number"
          />
          <Select
            className="flex-1"
            value={form.percentage}
            name="Percentage"
            options={percentages}
            onChange={handlePercentageChange}
          />
        </div>
        <div className="flex gap-6">
          <ButtonSelect
            name="Weight Unit"
            value={form.weightUnit}
            options={weightUnits}
            onChange={handleWeightUnitChange}
          />

          <ButtonSelect
            name="Bar Weight"
            value={form.barWeight}
            options={barWeights}
            onChange={handleBarWeightChange}
          />
        </div>

        <ButtonGroup
          name="Plates"
          values={form.plates}
          options={plates}
          optionType="number"
          onChange={handlePlateChange}
        />
        <div className="flex gap-2 mt-4">
          <button
            className="btn btn-secondary"
            onClick={handleCalculateButtonClick}
          >
            Calculate
          </button>
          <button className="btn btn-secondary btn-outline">Reset</button>
        </div>
      </div>

      <div className="">
        <hr />
        <BarbellLoadTable
          data={barbellLoadData}
          updateBarbellLoadEntry={handleUpdateBarbellLoadEntry}
        />
      </div>
    </Layout>
  );
}

export default BarbellLoadCalculator;

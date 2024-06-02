import { useState } from 'react';
import OneRepMaxTable from '~/components/ Tables/OneRepMaxTable';

import TextInput from '~/components/icons/ui/TextInput';
import WeightInput from '~/components/icons/ui/WeightInput';
import { calculateOneRepMax, generateLiftData } from '~/utils/calculators';

function OneRepMaxCalculatorPage() {
  const [weight, setWeight] = useState(0);

  const oneRepMax = calculateOneRepMax(225, 1);
  const repTable = generateLiftData(oneRepMax, 'kgs');
  console.log('OneRepMaxCalculatorPage ~ repTable:', repTable);

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold">One Rep Max Calculator</h3>
      <p className="text-sm">
        Calculate the maximum weight you can lift for one repetition.
      </p>
      <form className="my-6">
        <WeightInput />
        <TextInput label="Repetitions" />
        <button className="btn btn-block btn-primary mt-4">
          Calculate One Rep Max
        </button>
      </form>

      {oneRepMax ? <OneRepMaxTable /> : null}
    </div>
  );
}

export default OneRepMaxCalculatorPage;

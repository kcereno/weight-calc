import { oneRepMaxTableDataEntry } from '~/types/data';
import { Plate, BarWeight, BarbellLoad, WeightUnit } from '~/types/weight';

export function calculateOneRepMax(weight: number, reps: number): number {
  if (reps === 1) {
    return weight; // If reps is 1, the weight itself is the 1RM
  }
  return weight * (1 + reps / 30);
}

function calculateLiftWeight(oneRepMax: number, percentage: number): number {
  return Math.round(((oneRepMax * percentage) / 100) * 10) / 10;
}

export function generateLiftData(
  oneRepMax: number,
  weightType: WeightUnit
): oneRepMaxTableDataEntry[] {
  const percentageToRepsRangeTable: { [key: number]: string } = {
    100: '1',
    95: '2-3',
    90: '4-5',
    85: '6-7',
    80: '8-9',
    75: '10-11',
    70: '12-13',
    65: '14-15',
    60: '16-17',
    55: '18-19',
    50: '20+',
  };

  const data = [];
  for (let percent = 50; percent <= 100; percent += 5) {
    const liftWeight = calculateLiftWeight(oneRepMax, percent);
    const range = percentageToRepsRangeTable[percent];
    data.push({
      '% of 1RM': `${percent}%`,
      Weight: `${liftWeight} ${weightType}`,
      'Reps of 1RM': range,
    });
  }
  return data.reverse();
}

export const calculateBarbellLoad = (
  targetWeight: number,
  barWeight: BarWeight,
  availablePlates: Plate[]
): BarbellLoad | null => {
  let temp = (targetWeight - barWeight) / 2;

  if (temp < barWeight) {
    return null;
  }

  const load = availablePlates.map((plate) => {
    const perSide = Math.floor(temp / plate);

    temp -= perSide * plate;

    return {
      plate,
      perSide,
    };
  });

  return load;
};
export const calculateTotalPlateWeight = (barbellLoad: BarbellLoad) => {
  let total = 0;
  barbellLoad.forEach((entry) => {
    const totalWeight = entry.plate * (entry.perSide * 2);

    total += totalWeight;
  });

  return total;
};

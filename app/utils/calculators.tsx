import { oneRepMaxTableDataEntry } from '~/types/Data';

type WeightType = 'lbs' | 'kgs';

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
  weightType: WeightType
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

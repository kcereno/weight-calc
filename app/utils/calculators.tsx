import { OneRepMaxTableEntry } from '~/types/data';
import { WarmUpInputForm } from '~/types/forms';
import { WarmUpSet } from '~/types/sets';
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
): OneRepMaxTableEntry[] {
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

export function calculateWarmUpSets(input: WarmUpInputForm): WarmUpSet[] {
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

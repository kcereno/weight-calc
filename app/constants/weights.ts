import {
  KilogramBarWeight,
  KilogramPlate,
  PoundBarWeight,
  PoundPlate,
  WeightUnit,
} from '~/types/weight';

export const weightUnits: WeightUnit[] = ['lb', 'kg'];

export const poundBarWeights: PoundBarWeight[] = [35, 45, 60];
export const kilogramBarWeights: KilogramBarWeight[] = [10, 15, 20];

export const kilogramPlates: KilogramPlate[] = [1.25, 2.5, 5, 10, 15, 20, 25];
export const poundPlates: PoundPlate[] = [2.5, 5, 10, 25, 35, 45];

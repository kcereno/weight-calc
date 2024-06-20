import {
  BarWeight,
  KilogramBarWeight,
  Plate,
  PoundBarWeight,
  WeightUnit,
} from '~/types/weight';

export const weightUnits: WeightUnit[] = ['lb', 'kg'];

export const poundBarWeights: PoundBarWeight[] = [35, 45, 60];
export const kilogramBarWeights: KilogramBarWeight[] = [10, 15, 20];

export const defaultKgPlates: Plate[] = [25, 20, 15, 10, 5, 2.5, 1.25];
export const defaultLbPlates: Plate[] = [45, 35, 25, 10, 5, 2.5];

export const defaultKgBarWeight: BarWeight = 20;
export const defaultLbBarWeight: BarWeight = 45;

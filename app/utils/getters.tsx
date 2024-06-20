import {
  kilogramBarWeights,
  defaultKgPlates,
  poundBarWeights,
  defaultLbPlates,
} from '~/constants/weights';
import { BarWeight, Plate, WeightUnit } from '~/types/weight';

export const getPlates = (weightUnit: WeightUnit): Plate[] =>
  weightUnit === 'lb' ? defaultLbPlates : defaultKgPlates;

export const getBarWeights = (weightUnit: WeightUnit): BarWeight[] =>
  weightUnit === 'lb' ? poundBarWeights : kilogramBarWeights;

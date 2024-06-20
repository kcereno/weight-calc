import {
  kilogramBarWeights,
  kilogramPlates,
  poundBarWeights,
  poundPlates,
} from '~/constants/weights';
import { BarWeight, Plate, WeightUnit } from '~/types/weight';

export const getPlates = (weightUnit: WeightUnit): Plate[] =>
  weightUnit === 'lb' ? poundPlates : kilogramPlates;

export const getBarWeights = (weightUnit: WeightUnit): BarWeight[] =>
  weightUnit === 'lb' ? poundBarWeights : kilogramBarWeights;

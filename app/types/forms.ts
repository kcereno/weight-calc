import { WarmupSetOption, WorkingSetRepRange } from './sets';
import { BarWeight, Plate, WeightUnit } from './weight';

export type BarbellLoadForm = {
  weightUnit: WeightUnit;
  percentage: number;
  barWeight: BarWeight;
  plates: Plate[];
  targetWeight: number;
};

export type WarmUpInputForm = {
  warmupSetOption: WarmupSetOption;
  workingSetWeight: number;
  workingSetRepRange: WorkingSetRepRange;
};

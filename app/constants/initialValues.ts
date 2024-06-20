import { BarbellLoadForm } from '~/types/forms';
import { BarbellLoadData } from '~/types/weight';

// Barbell Load Calculator
export const INITIAL_BARBELL_LOAD_FORM: BarbellLoadForm = {
  weightUnit: 'lb',
  percentage: 100,
  barWeight: 45,
  plates: [45, 35, 25, 10, 5, 2.5],
  targetWeight: 45,
};
export const INITIAL_BARBELL_LOAD_LB = [
  {
    plate: 45,
    perSide: 0,
  },
  {
    plate: 35,
    perSide: 0,
  },
  {
    plate: 25,
    perSide: 0,
  },
  {
    plate: 10,
    perSide: 0,
  },
  {
    plate: 5,
    perSide: 0,
  },
  {
    plate: 2.5,
    perSide: 0,
  },
  {
    plate: 1.25,
    perSide: 0,
  },
];

export const INITIAL_BARBELL_LOAD_KB = [
  {
    plate: 25,
    perSide: 0,
  },
  {
    plate: 20,
    perSide: 0,
  },
  {
    plate: 15,
    perSide: 0,
  },
  {
    plate: 10,
    perSide: 0,
  },
  {
    plate: 5,
    perSide: 0,
  },
  {
    plate: 2.5,
    perSide: 0,
  },
  {
    plate: 1.25,
    perSide: 0,
  },
];

export const INITIAL_BARBELL_LOAD_DATA_LB: BarbellLoadData = {
  targetWeight: 45,
  barWeight: 45,
  load: INITIAL_BARBELL_LOAD_LB,
};

export const INITIAL_BARBELL_LOAD_DATA_KG: BarbellLoadData = {
  targetWeight: 20,
  barWeight: 20,
  load: INITIAL_BARBELL_LOAD_KB,
};

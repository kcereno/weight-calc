export type WeightUnit = 'lb' | 'kg';

export type WeightFormData = {
  weight: number;
  weightUnit: WeightUnit;
};

export type KilogramPlate = 1.25 | 2.5 | 5 | 10 | 15 | 20 | 25;
export type PoundPlate = 2.5 | 5 | 10 | 25 | 35 | 45 | 55;

export type KilogramBarWeight = 10 | 15 | 20;
export type PoundBarWeight = 35 | 45 | 60;

export type Plate = KilogramPlate | PoundPlate;
export type BarWeight = KilogramBarWeight | PoundBarWeight;

export type BarBellLoadEntry = {
  plate: number;
  perSide: number;
};

export type BarbellLoad = BarBellLoadEntry[];

export type BarbellLoadData = {
  load: BarbellLoad | null;
  barWeight: BarWeight;
  targetWeight: number;
};

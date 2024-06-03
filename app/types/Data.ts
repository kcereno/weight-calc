export type oneRepMaxTableDataEntry = {
  '% of 1RM': string;
  Weight: string;
  'Reps of 1RM': string;
};

export type WeightType = 'lbs' | 'kgs';

export type WeightFormData = {
  weight: number;
  weightType: WeightType;
};

export type WorkingSetRepRange =
  | '1-5 (Strength)'
  | '6-12 (Hypertrophy)'
  | '12+ (Endurance)';

export type WarmupSetOption =
  | '3 (Ideal for Hypertrophy and Endurance Training)'
  | '4 (Ideal for All Training'
  | '5 (Ideal for Strength Training)';

export type WarmUpSet = {
  weight: number | 'BAR';
  reps: string | number;
  percentage?: number; // Include percentage of the working set weight
};

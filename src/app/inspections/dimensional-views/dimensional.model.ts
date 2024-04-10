import { Range } from './range.model';

export class Dimensional {
  count: string;
  DIM_FORM_1_MEASUREMENT_POINT: string;
  DIM_FORM_1_A_0: string;
  DIM_FORM_1_A_90: string;
  DIM_FORM_1_B_0: string;
  DIM_FORM_1_B_90: string;
  DIM_FORM_1_D_0: string;
  DIM_FORM_1_D_90: string;
  DIM_FORM_1_DATUM: string;
  DIM_FORM_1_MICROMETER_1: string;
  ranges: Array<Range>;
  complete: boolean;
}

import { Indication } from 'src/app/shared/models/indication.model';

export class Eddy {
  MATERIAL: string;
  SURFACE_CONDITION: string;
  MATERIAL_CONDITION: string;
  SURFACE_TEMPERATURE: string;
  UNIT_MAKE: string;
  UNIT_SERIAL_NUMBER: string;
  PROBE_TYPE: string;
  PROBE_SERIAL_NUMBER: string;
  REF_BLOCK_DESCRIPTION: string;
  REF_BLOCK_SERIAL_NUMBER: string;
  PROBE_FREQUENCY: string;
  PHASE_ANGLE: string;
  GAIN_SETTING: string;
  SENSITIVITY_SETTING: string;
  CAL_SHIM_USED: string;
  COMPONENT_TRACEABILITY: string;
  INSPECTION_STATUS: string;
  indicationDataList?: Array<Indication>;
  complete: boolean;
}

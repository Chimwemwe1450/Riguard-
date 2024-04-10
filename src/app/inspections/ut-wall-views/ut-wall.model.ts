import { ReadingLabels } from './reading-labels.interface';

export class UtWall {
  AVERAGE_AVERAGE: string;
  AVERAGE_MAX: string;
  AVERAGE_MIN: string;
  CALIBERATED: string;
  COMPONENT_TRACEABILITY: string;
  CONSUM_BATCH: string;
  CONSUM_BRAND: string;
  CONSUM_TYPE: string;
  DISTANCE_BETWEEN_READINGS: number;
  INSPECTION_STATUS: string;
  MATERIAL: string;
  MATERIAL_CONDITION: string;
  MEASUREMENT_POINT: string;
  NOTES: string;
  PROBE_FREQUENCY: string;
  PROBE_SERIAL_NUMBER: string;
  PROBE_SIZE: string;
  SURFACE_CONDITION: string;
  SURFACE_TEMPERATURE: number;
  TEST_EQUIPMENT: string;
  TEST_EQUIP_SERIAL_NUMBER: string;
  readingA: Array<ReadingLabels>;
  readingB: Array<ReadingLabels>;
  readingC: Array<ReadingLabels>;
  readingD: Array<ReadingLabels>;
  complete: boolean;
}

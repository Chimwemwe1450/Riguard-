import { QcpList } from './qcp-list';

export class StoredInspectionData {
  id: string;
  type: string;
  timeStamp: string;
  data: any;
  currentStep: number;
  qcpData: QcpList;
}

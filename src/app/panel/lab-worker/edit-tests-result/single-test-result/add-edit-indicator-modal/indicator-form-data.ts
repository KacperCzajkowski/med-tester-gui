import { IndicatorDialogStatus } from "./indicator-dialog-status";
import { Indicator } from "../../../../../shared/api/indicator";

export interface IndicatorFormData {
  status: IndicatorDialogStatus;
  indicator: Indicator | null;
}

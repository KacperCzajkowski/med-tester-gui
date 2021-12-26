import { ReferenceRange } from "./reference-range";

export interface Indicator {
  name: string;
  result: number;
  unit: string;
  referenceRange: ReferenceRange;
}

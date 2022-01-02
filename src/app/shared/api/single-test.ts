import { Indicator } from "./indicator";

export interface SingleTest {
  name: string;
  icdCode: string;
  indicators: Indicator[];
}

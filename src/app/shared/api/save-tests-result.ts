import { SingleTest } from "./single-test";
import { TestsResultStatus } from "./tests-result-status";

export interface SaveTestsResult {
  status: TestsResultStatus;
  results: SingleTest[];
}

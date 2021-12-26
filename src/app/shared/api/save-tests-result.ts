import { SingleTest } from "./single-test";
import { TestsResultStatus } from "./tests-result-status";

export interface SaveTestsResult {
  userPesel: string;
  testId: string | null;
  status: TestsResultStatus;
  results: SingleTest[];
}

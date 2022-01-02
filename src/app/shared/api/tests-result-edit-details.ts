import { PatientDetails } from "./patient-details";
import { SingleTest } from "./single-test";

export interface TestsResultEditDetails {
  patientDetails: PatientDetails;
  results: SingleTest[];
}

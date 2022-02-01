import { Component, Input } from '@angular/core';
import { SingleTest } from "../../../../shared/api/single-test";

@Component({
  selector: 'app-single-test-result',
  templateUrl: './single-test-result.component.html',
  styleUrls: ['./single-test-result.component.scss']
})
export class SingleTestResultComponent {
  @Input()
  test!: SingleTest

  displayedColumns: string[] = ['name', 'result', 'unit', 'referenceRangeMin', 'referenceRangeMax'];
}

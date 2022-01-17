import { Component, Input, OnInit } from '@angular/core';
import { SingleTest } from "../../../../shared/api/single-test";

@Component({
  selector: 'app-single-test-result',
  templateUrl: './single-test-result.component.html',
  styleUrls: ['./single-test-result.component.scss']
})
export class SingleTestResultComponent implements OnInit {
  @Input()
  test!: SingleTest

  displayedColumns: string[] = ['name', 'result', 'unit', 'referenceRangeMin', 'referenceRangeMax'];
  constructor() { }

  ngOnInit(): void {
  }

}

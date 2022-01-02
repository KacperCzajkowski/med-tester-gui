import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Indicator } from "../../../../../shared/api/indicator";

export class AddEditIndicatorForm extends FormGroup {
  public readonly name = new FormControl('', Validators.required);
  public readonly result = new FormControl('', [Validators.required, Validators.min(0)]);
  public readonly unit = new FormControl('', [Validators.required]);
  public readonly min = new FormControl('', [Validators.min(0)]);
  public readonly max = new FormControl('', [Validators.min(0)]);

  constructor(indicator: Indicator | null) {
    super({});

    this.registerControl('name', this.name);
    this.registerControl('result', this.result);
    this.registerControl('unit', this.unit);
    this.registerControl('min', this.min);
    this.registerControl('max', this.max);

    if (indicator) {
      this.patchValue({
        name: indicator.name,
        result: indicator.result,
        unit: indicator.unit,
        min: indicator.referenceRange.min,
        max: indicator.referenceRange.max
      });
    }
  }

  getIndicator(): Indicator {
    return {
      name: this.name.value,
      result: this.result.value,
      unit: this.unit.value,
      referenceRange: {
        min: this.min.value,
        max: this.max.value
      }
    } as Indicator;
  }
}

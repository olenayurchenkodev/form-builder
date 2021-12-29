import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ElementsStylesClass} from "../elements-styles.class";


@Component({
  selector: 'fieldStyles-selectCheckboxInput',
  templateUrl: './selectCheckboxInput.component.html',
  styleUrls: ['./selectCheckboxInput.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCheckboxInputComponent extends ElementsStylesClass{


}

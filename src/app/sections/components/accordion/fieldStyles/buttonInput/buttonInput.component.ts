import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ElementsStylesClass} from "../elements-styles.class";

@Component({
  selector: 'fieldStyles-buttonInput',
  templateUrl: './buttonInput.component.html',
  styleUrls: ['./buttonInput.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonInputComponent extends ElementsStylesClass{

}

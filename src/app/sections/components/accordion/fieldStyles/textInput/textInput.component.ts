import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ElementsStylesClass} from "../elements-styles.class";


@Component({
  selector: 'fieldStyles-textInput',
  templateUrl: './textInput.component.html',
  styleUrls: ['./textInput.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextInputComponent extends ElementsStylesClass{

}

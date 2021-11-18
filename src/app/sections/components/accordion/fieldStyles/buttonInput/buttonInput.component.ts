import { Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'fieldStyles-buttonInput',
  templateUrl: './buttonInput.component.html',
  styleUrls: ['./buttonInput.component.scss']
})
export class ButtonInputComponent {

  formStyle = new FormGroup({
    colour: new FormControl(),
    font: new FormControl()
  })

}

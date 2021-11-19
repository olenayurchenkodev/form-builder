import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SharedFieldStyleService} from "../../../../../../services/shareFieldStyles.service";


@Component({
  selector: 'fieldStyles-selectCheckboxInput',
  templateUrl: './selectCheckboxInput.component.html',
  styleUrls: ['./selectCheckboxInput.component.scss']
})
export class SelectCheckboxInputComponent {
  @Input() id: any = null;

  formStyle = new FormGroup({
    label: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl(),
    newOption: new FormControl()

  })

  constructor(private sharedStyleService:SharedFieldStyleService) { }

  sendStyles(){
    this.sharedStyleService.sendMessage([
      this.formStyle.get('label')?.value,
      this.formStyle.get('width')?.value,
      this.formStyle.get('height')?.value,
      this.formStyle.get('required')?.value,
      this.formStyle.get('newOption')?.value,
      this.id
    ]);
  }

}

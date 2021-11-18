import { Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SharedService} from "../../../../../../services/share.service";


@Component({
  selector: 'fieldStyles-selectCheckboxInput',
  templateUrl: './selectCheckboxInput.component.html',
  styleUrls: ['./selectCheckboxInput.component.scss']
})
export class SelectCheckboxInputComponent {

  formStyle = new FormGroup({
    label: new FormControl(),
    placeholder: new FormControl()
  })

  constructor(private sharedService:SharedService) { }

  sendStyles(){
    this.sharedService.sendMessage([
      this.formStyle.get('label')?.value,
      this.formStyle.get('width')?.value,
      this.formStyle.get('height')?.value,
      this.formStyle.get('required')?.value,
      this.formStyle.get('newOption')?.value
    ]);
  }

}

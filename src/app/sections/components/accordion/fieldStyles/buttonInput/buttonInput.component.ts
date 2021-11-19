import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SharedFieldStyleService} from "../../../../../../services/shareFieldStyles.service";

@Component({
  selector: 'fieldStyles-buttonInput',
  templateUrl: './buttonInput.component.html',
  styleUrls: ['./buttonInput.component.scss']
})
export class ButtonInputComponent {
  @Input() id: any = null;

  formStyle = new FormGroup({
    label: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl(),
    border: new FormControl()
  })

  border=[
    {name: "None", value: "none"},
    {name: "Dotted line", value: "dotted"},
    {name: "Solid line", value: "solid"}
  ]

  selected = this.border[0]

  constructor(private sharedStyleService:SharedFieldStyleService) { }

  sendStyles(){
    this.sharedStyleService.sendMessage([
      this.formStyle.get('label')?.value,
      this.formStyle.get('width')?.value,
      this.formStyle.get('height')?.value,
      this.formStyle.get('required')?.value,
      this.formStyle.get('border')?.value,
      this.id
    ]);
    // console.log(this.formStyle);
  }

}

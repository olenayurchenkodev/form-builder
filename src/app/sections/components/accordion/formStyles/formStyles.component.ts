import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SharedFormStyleService} from "../../../../../services/shareFormStyles.service";


@Component({
  selector: 'accordion-formStyles',
  templateUrl: './formStyles.component.html',
  styleUrls: ['./formStyles.component.scss']
})
export class FormStylesComponent{

  border=[
    {name: "None", value: "none"},
    {name: "Dotted line", value: "dotted"},
    {name: "Solid line", value: "solid"}
  ]

  fontWeight=[
    {name: "Thin", value: "thin"},
    {name: "Normal", value: "normal"},
    {name: "Bold", value: "bold"}
  ]

  formStyle = new FormGroup({
    label: new FormControl(),
    colour: new FormControl(),
    backcolour: new FormControl(),
    border: new FormControl(),
    fontSize: new FormControl(),
    fontWeight: new FormControl(),
  })


  constructor(private sharedStyleService:SharedFormStyleService) { }

  sendStyles(){
    this.sharedStyleService.sendMessage([
      this.formStyle.get('label')?.value,
      this.formStyle.get('colour')?.value,
      this.formStyle.get('backcolour')?.value,
      this.formStyle.get('border')?.value,
      this.formStyle.get('fontSize')?.value,
      this.formStyle.get('fontWeight')?.value
    ]);
  }

}

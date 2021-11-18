import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SharedService} from "../../../../../services/share.service";


@Component({
  selector: 'accordion-formStyles',
  templateUrl: './formStyles.component.html',
  styleUrls: ['./formStyles.component.scss']
})
export class FormStylesComponent{

  selected='Times new roman'

  fonts=[
    {name: "Montserrat", value: "Montserrat"},
    {name: "Open Sans", value: "Open Sans"},
    {name: "Roboto", value: "Roboto"},
    {name: "Times new roman", value: "Times new roman"}
  ]

  formStyle = new FormGroup({
    colour: new FormControl(),
    font: new FormControl(),
    fontSize: new FormControl(),
    fontWeight: new FormControl(),
  })

  constructor(private sharedService:SharedService) { }

  sendStyles(){
    this.sharedService.sendMessage([
      this.formStyle.get('colour')?.value,
      this.formStyle.get('font')?.value,
      this.formStyle.get('fontSize')?.value,
      this.formStyle.get('fontWeight')?.value
    ]);
  }

}

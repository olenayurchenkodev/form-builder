import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {setForm} from "../../../../../store/actions/form.actions";


@Component({
  selector: 'accordion-formStyles',
  templateUrl: './formStyles.component.html',
  styleUrls: ['./formStyles.component.scss']
})
export class FormStylesComponent{
  customStyles?: { [key: string]: string | boolean };

  border=[
    {name: "None", value: "none"},
    {name: "Dotted line", value: "dotted"},
    {name: "Solid line", value: "solid"}
  ];

  fontWeight=[
    {name: "Thin", value: "thin"},
    {name: "Normal", value: "normal"},
    {name: "Bold", value: "bold"}
  ];

  formStyle = new FormGroup({
    label: new FormControl(),
    colour: new FormControl(),
    backcolour: new FormControl(),
    border: new FormControl(),
    fontSize: new FormControl(),
    fontWeight: new FormControl(),
  })

  constructor(private store: Store) {  }

  sendStyles(){
    this.customStyles = {
      label: this.formStyle.get('label')?.value,
      colour: `rgb(${this.formStyle.get('colour')?.value})`,
      backcolour: `rgb(${this.formStyle.get('backcolour')?.value})`,
      border: this.formStyle.get('border')?.value,
      fontSize: `${this.formStyle.get('fontSize')?.value}px`,
      fontWeight: this.formStyle.get('fontWeight')?.value
    }
    this.store.dispatch(setForm({styles: this.customStyles}));
    // console.log(this.customStyles);
  }

}

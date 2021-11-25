import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {setField} from "../../../../../../store/actions/form.actions";

@Component({
  selector: 'fieldStyles-buttonInput',
  templateUrl: './buttonInput.component.html',
  styleUrls: ['./buttonInput.component.scss']
})
export class ButtonInputComponent {
  customStyles?: { [key: string]: string | boolean };
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

  constructor(
    private store: Store
  ) { }

  sendStyles(){
    this.customStyles = {
      label: this.formStyle.get('label')?.value,
      width: `${this.formStyle.get('width')?.value}px`,
      height: `${this.formStyle.get('height')?.value}px`,
      border: this.formStyle.get('border')?.value
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
    // console.log(this.customStyles);
  }

}

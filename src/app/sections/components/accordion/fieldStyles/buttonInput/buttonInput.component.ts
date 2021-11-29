import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {deleteField, setField} from "../../../../../../store/actions/form.actions";
import {DeleteElemService} from "../../../../../../services/deleteElem.service";

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
    backcolour: new FormControl(),
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
    private store: Store,
    private deleteElemService: DeleteElemService
  ) {  }

  sendStyles(){
    this.customStyles = {
      label: this.formStyle.get('label')?.value,
      backcolour: `rgb(${this.formStyle.get('backcolour')?.value})`,
      width: `${this.formStyle.get('width')?.value}px`,
      height: `${this.formStyle.get('height')?.value}px`,
      border: this.formStyle.get('border')?.value
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
    // console.log(this.customStyles);
  }

  deleteElem(){
    this.deleteElemService.sendMessage(this.id[0]);
    this.store.dispatch(deleteField({id: this.id[0]}));
  }

}

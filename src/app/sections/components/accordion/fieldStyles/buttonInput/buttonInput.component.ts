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
  public customStyles?: { [key: string]: string | boolean };
  @Input() id: string = '';

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

  constructor(
    private store: Store,
    private deleteElemService: DeleteElemService
  ) { }

  sendStyles(){
    this.customStyles = {
      label: this.formStyle.value.label,
      backcolour: `rgb(${this.formStyle.value.backcolour})`,
      width: `${this.formStyle.value.width}px`,
      height: `${this.formStyle.value.height}px`,
      border: this.formStyle.value.border
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
  }

  deleteElem(){
    this.deleteElemService.sendMessage(this.id[0]);
    this.store.dispatch(deleteField({id: this.id[0]}));
  }

}

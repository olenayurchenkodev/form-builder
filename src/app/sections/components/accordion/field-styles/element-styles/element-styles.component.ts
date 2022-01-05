import { FormControl, FormGroup } from "@angular/forms";
import { Component, Input } from '@angular/core';
import { Store } from "@ngrx/store";

import { addOption, deleteField, setField } from "src/store/actions/form.actions";
import { DeleteElemService } from "src/services/deleteElem.service";


@Component({
  selector: 'app-element-styles',
  templateUrl: './element-styles.component.html',
  styleUrls: ['./element-styles.component.scss']
})
export class ElementStylesComponent {
  public customStyles?: { [key: string]: string | boolean };
  public border=["none","dotted","solid"];
  @Input() type: string = '';
  @Input() id: string = '';

  formStyle = new FormGroup({
    label: new FormControl(),
    backcolour: new FormControl(),
    placeholder: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl(),
    border: new FormControl(),
    newOption: new FormControl()
  })

  constructor(
    private store: Store,
    private deleteElemService: DeleteElemService
  ) { }

  sendStyles(): void {
    this.customStyles = {
      label: this.formStyle.value.label,
      backcolour: `rgb(${this.formStyle.value.backcolour})`,
      width: `${this.formStyle.value.width}px`,
      height: `${this.formStyle.value.height}px`,
      border: this.formStyle.value.border,
      required: this.formStyle.value.required,
      placeholder: this.formStyle.get('placeholder')?.value,
      newOption: ''
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
  }

  addOption(): void {
    this.store.dispatch(addOption({
      id: this.id,
      option: this.formStyle.get('newOption')?.value
    }));
  }

  deleteElem(): void {
    this.deleteElemService.sendMessage(this.id[0]);
    this.store.dispatch(deleteField({id: this.id[0]}));
  }
}

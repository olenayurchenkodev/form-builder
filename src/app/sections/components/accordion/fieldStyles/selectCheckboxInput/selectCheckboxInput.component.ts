import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {addOption, deleteField, setField} from "../../../../../../store/actions/form.actions";
import {Store} from "@ngrx/store";
import {DeleteElemService} from "../../../../../../services/deleteElem.service";


@Component({
  selector: 'fieldStyles-selectCheckboxInput',
  templateUrl: './selectCheckboxInput.component.html',
  styleUrls: ['./selectCheckboxInput.component.scss']
})
export class SelectCheckboxInputComponent {
  customStyles?: { [key: string]: string | boolean | [] };
  @Input() id: any = null;

  formStyle = new FormGroup({
    label: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl(),
    newOption: new FormControl()

  })

  constructor(
    private store: Store,
    private deleteElemService: DeleteElemService
  ) {  }

  addOption(){
    this.store.dispatch(addOption({
        id: this.id,
        option: this.formStyle.get('newOption')?.value
      }));
  }

  sendStyles(){
    this.customStyles = {
      label: this.formStyle.get('label')?.value,
      width: `${this.formStyle.get('width')?.value}px`,
      height: `${this.formStyle.get('height')?.value}px`,
      required: this.formStyle.get('required')?.value,
      newOption: ''
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
    // console.log(this.customStyles);
  }

  deleteElem(){
    this.deleteElemService.sendMessage(this.id);
    this.store.dispatch(deleteField({id: this.id}));
  }

}

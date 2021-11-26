import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {deleteField, setField} from "../../../../../../store/actions/form.actions";
import {Store} from "@ngrx/store";
import {DeleteElemService} from "../../../../../../services/deleteElem.service";


@Component({
  selector: 'fieldStyles-textInput',
  templateUrl: './textInput.component.html',
  styleUrls: ['./textInput.component.scss']
})
export class TextInputComponent {
  customStyles?: { [key: string]: string | boolean };
  @Input() id: any = null;

  formStyle = new FormGroup({
    label: new FormControl(),
    placeholder: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl()
  })

  constructor(
    private store: Store,
    private deleteElemService: DeleteElemService
  ) {  }

  sendStyles(){
    this.customStyles = {
      label: this.formStyle.get('label')?.value,
      placeholder: this.formStyle.get('placeholder')?.value,
      width: `${this.formStyle.get('width')?.value}px`,
      height: `${this.formStyle.get('height')?.value}px`,
      required: this.formStyle.get('required')?.value
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
    // console.log(this.customStyles);
  }

  deleteElem(){
    this.deleteElemService.sendMessage(this.id[0]);
    this.store.dispatch(deleteField({id: this.id[0]}));
  }

}

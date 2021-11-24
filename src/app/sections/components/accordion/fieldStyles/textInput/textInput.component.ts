import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {setField} from "../../../../../../store/actions/form.actions";
import {Store} from "@ngrx/store";


@Component({
  selector: 'fieldStyles-textInput',
  templateUrl: './textInput.component.html',
  styleUrls: ['./textInput.component.scss']
})
export class TextInputComponent {
  customStyles?: { [key: string]: string | boolean };
  @Input() id: any = null;

  width = [
    {name: 'small', value: '80%'},
    {name: 'medium', value: '90%'},
    {name: 'large', value: '100%'}
  ]
  height = [
    {name: 'small', value: '60px'},
    {name: 'medium', value: '80px'},
    {name: 'large', value: '100px'}
  ]

  formStyle = new FormGroup({
    label: new FormControl(),
    placeholder: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl()
  })

  constructor(private store: Store) {  }

  sendStyles(){
    this.customStyles = {
      label: this.formStyle.get('label')?.value,
      placeholder: this.formStyle.get('placeholder')?.value,
      width: this.formStyle.get('width')?.value,
      height: this.formStyle.get('height')?.value,
      required: this.formStyle.get('required')?.value
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
    // console.log(this.customStyles);
  }

  deleteElem(){

  }

}

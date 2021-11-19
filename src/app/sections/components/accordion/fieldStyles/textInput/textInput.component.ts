import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {SharedFieldStyleService} from "../../../../../../services/shareFieldStyles.service";


@Component({
  selector: 'fieldStyles-textInput',
  templateUrl: './textInput.component.html',
  styleUrls: ['./textInput.component.scss']
})
export class TextInputComponent {
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

  constructor(
    private sharedFieldStyleService:SharedFieldStyleService
  ) {  }

  sendStyles(){
    this.sharedFieldStyleService.sendMessage([
      this.formStyle.get('label')?.value,
      this.formStyle.get('placeholder')?.value,
      this.formStyle.get('width')?.value,
      this.formStyle.get('height')?.value,
      this.formStyle.get('required')?.value,
      this.id
    ]);
    // console.log(this.formStyle.value);
  }

  deleteElem(){

  }

}

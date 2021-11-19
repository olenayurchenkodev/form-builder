import {Component, Input} from '@angular/core';



@Component({
  selector: 'input-input-card',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() width: string = '';
  @Input() height: boolean = false;
  @Input() id: any = null;

}

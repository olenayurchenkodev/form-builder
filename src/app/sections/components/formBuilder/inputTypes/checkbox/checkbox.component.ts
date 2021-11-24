import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";

@Component({
  selector: 'checkbox-input-card',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent {
  styles?: any

  width: string = this.styles? this.styles.width: 'normal';
  height: string = this.styles? this.styles.height: 'normal';
  options: [] = this.styles? this.styles.options: ['make options :)'];
  @Input() id: any = null;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(){
    // console.log('init id',this.id)
    this.store.select(getFieldStyle(this.id-1))
      .subscribe(
        s => this.styles = s
      )
  }

}

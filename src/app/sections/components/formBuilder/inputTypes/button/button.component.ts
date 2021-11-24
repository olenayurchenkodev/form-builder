import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";

@Component({
  selector: 'button-input-card',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  styles?: any

  width: string = this.styles? this.styles.width: 'normal';
  height: string = this.styles? this.styles.height: 'normal';
  border: string = this.styles? this.styles.border: '1px solid';
  @Input() id: any = null;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(){
    console.log('init id',this.id)
    this.store.select(getFieldStyle(this.id-1))
      .subscribe(
        s => this.styles = s
      )
  }

}

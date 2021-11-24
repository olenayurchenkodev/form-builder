import {Component, Input, OnInit} from '@angular/core';
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";
import {Store} from "@ngrx/store";


@Component({
  selector: 'input-input-card',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{
  styles?: any

  width: string = this.styles? this.styles.width: 'normal';
  height: string = this.styles? this.styles.height: 'normal';
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

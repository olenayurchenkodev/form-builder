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

  @Input() id: any = null;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(){
    // console.log('init id',this.id)
    this.store.select(getFieldStyle(this.id))
      .subscribe(
        s => this.styles = s
      )
  }
}

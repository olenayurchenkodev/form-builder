import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";

@Component({
  selector: 'textarea-input-card',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})

export class TextareaComponent implements OnInit{

  styles?: any

  width: string = this.styles? this.styles.width: 'normal';
  height: string = this.styles? this.styles.height: 'normal';
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

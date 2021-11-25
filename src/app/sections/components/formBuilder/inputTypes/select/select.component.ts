import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {getFieldStyle} from "../../../../../../store/reducers/form.reducers";

@Component({
  selector: 'select-input-card',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent {
  styles?: any

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
    console.log(this.styles.newOption);
    setTimeout(()=>{
      console.log(this.styles.newOption);
    }, 10000)
  }

}

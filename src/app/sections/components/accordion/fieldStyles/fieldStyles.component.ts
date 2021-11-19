import {Component} from '@angular/core';
import {SharedFieldStyleService} from "../../../../../services/shareFieldStyles.service";
import {SharedDataService} from "../../../../../services/shareElemData.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'accordion-fieldStyles',
  templateUrl: './fieldStyles.component.html',
  styleUrls: ['./fieldStyles.component.scss']
})
export class FieldStylesComponent{

  elemData: any = []
  receiveData:Subscription;

  constructor(
    private sharedStyleService:SharedFieldStyleService,
    private sharedDataService:SharedDataService
  ) {
    this.receiveData = this.sharedDataService.getClickEvent()
      .subscribe( message => this.elemData = message)
    // setTimeout(()=>{
    //   console.log(this.elemData);
    // }, 10000)
  }

}

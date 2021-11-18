import {Component} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {Subscription} from "rxjs";
import {SharedService} from "../../../../services/share.service";


@Component({
  selector: 'form-builder-root',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.scss']
})
export class FormBuilderComponent{

  formStyles: any = '';
  form = [];
  receiveData:Subscription;

  constructor(private sharedService:SharedService) {
    this.receiveData = this.sharedService.getClickEvent()
      .subscribe( message => this.formStyles = message)
  }

  drop(event: CdkDragDrop<string[]|any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}

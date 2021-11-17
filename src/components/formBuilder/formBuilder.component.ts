import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'form-builder-root',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.scss']
})
export class FormBuilderComponent {

  form = []

  drop(event: CdkDragDrop<string[]|any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

    }
  }

}

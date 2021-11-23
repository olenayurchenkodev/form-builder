import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'input-card-root',
  templateUrl: './inputCard.component.html',
  styleUrls: ['./inputCard.component.scss']
})


export class InputCardComponent {

  inputs = ['Input', 'Textarea', 'Button', 'Checkbox', 'Select']

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}

import { Component } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'input-card-root',
  templateUrl: './inputCard.component.html',
  styleUrls: ['./inputCard.component.scss']
})
export class InputCardComponent {

  inputs = ['Input', 'Textarea', 'Button', 'Checkbox', 'Select option']

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      //copyArrayItem(event.container.data)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}

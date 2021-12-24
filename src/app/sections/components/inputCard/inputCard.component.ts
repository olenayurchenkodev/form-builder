import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {Store} from "@ngrx/store";
import {setAuth} from "../../../../store/actions/form.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'input-card-root',
  templateUrl: './inputCard.component.html',
  styleUrls: ['./inputCard.component.scss']
})
export class InputCardComponent {

  constructor(
    private store: Store,
    public router: Router
  ) {  }

  inputs = ['Input', 'Textarea', 'Button', 'Checkbox', 'Select'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  logout(): void {
    localStorage.removeItem('userData');
    this.store.dispatch(setAuth({auth: ''}));
    this.router.navigate(['/']);
  }

}

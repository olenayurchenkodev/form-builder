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
  public inputs = ['Input', 'Textarea', 'Button', 'Checkbox', 'Select'];

  constructor(
    private store: Store,
    public router: Router
  ) {  }

  drop(event: CdkDragDrop<string[]>): void {
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

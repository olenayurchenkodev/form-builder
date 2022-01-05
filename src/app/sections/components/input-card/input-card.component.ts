import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

import { setAuth } from "../../../../store/actions/form.actions";


@Component({
  selector: 'app-input-card-root',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent {
  public inputs = ['input', 'textarea', 'button', 'checkbox', 'select'];

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

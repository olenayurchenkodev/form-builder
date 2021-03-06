import {Component,OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {SharedDataService} from "../../../../services/shareElemData.service";
import {Store} from "@ngrx/store";
import {createField} from '../../../../store/actions/form.actions'
import {getFormStyle} from "../../../../store/reducers/form.reducers";
import {DeleteElemService} from "../../../../services/deleteElem.service";
import { Subscription, takeUntil} from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import {map} from "rxjs/operators";
import {FormControl} from "@angular/forms";
import {BaseClass} from "../../../base.class";


@Component({
  selector: 'app-form-builder-root',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent extends BaseClass implements OnInit{
  public formStyles?: {[p: string]: string | boolean | []} | undefined;
  public form: never[] | string[] = [];
  textarea = new FormControl()
  public ids: string[] = [];
  public click = false;
  public receiveData:Subscription;

  constructor(
    private store: Store,
    private sharedDataService:SharedDataService,
    private deleteElemService: DeleteElemService
  ) {
    super();
    this.receiveData = this.deleteElemService.getClickEvent()
      .subscribe( message => this.deleteElem(message))
  }

  ngOnInit(): void{
    this.store.select(getFormStyle)
      .pipe(
        takeUntil(this.unsubscribe$),
        map(s => this.formStyles = s ))
      .subscribe()
  }

  drop(event: CdkDragDrop<string[]>): void{
    if (event.previousContainer === event.container) {
      this.changePos(this.ids, event.previousIndex, event.currentIndex);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      const id = uuidv4()
      this.addField(id, this.form[event.currentIndex])
      this.ids.splice(event.currentIndex, 0, id)
    }
  }

  changePos (arr: any[], prev: number, curr: number): void {
    let elem = arr[prev]
    let i = prev
    while (arr[i] !== arr[curr]) {
      if (prev < curr) {
        arr[i] = arr[i + 1];
        i++;
      } else {
        arr[i] = arr[i - 1];
        i--;
      }
    }
    arr[curr] = elem;
  }

  addField (id: string, typeField: string): void{
    this.store.dispatch(createField({id: id, typeField: typeField}))
  }

  deleteElem (id: string): void{
    const index = this.ids.indexOf(id);
    this.ids.splice(index, 1)
    this.form.splice(index, 1)
  }

  selectInput(type: string, id: string[]): void{
    this.click = true
    this.sharedDataService.sendMessage([
      type, id
    ]);
  }

  generateForm(): void{
    console.log('generated');
  }

}

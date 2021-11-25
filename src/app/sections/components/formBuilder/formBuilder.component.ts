import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {SharedDataService} from "../../../../services/shareElemData.service";
import {Store} from "@ngrx/store";
import {createField} from '../../../../store/actions/form.actions'
import {getFormStyle} from "../../../../store/reducers/form.reducers";
import {DeleteElemService} from "../../../../services/deleteElem.service";
import {Subscription} from "rxjs";
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'form-builder-root',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.scss']
})
export class FormBuilderComponent implements OnInit{

  formStyles?: any
  form = [];
  ids:any = [];
  click: boolean = false;
  receiveData:Subscription;

  constructor(
    private store: Store,
    private sharedDataService:SharedDataService,
    private deleteElemService: DeleteElemService
  ) {
    this.receiveData = this.deleteElemService.getClickEvent()
      .subscribe( message => this.deleteElem(message[0]))
  }

  ngOnInit(){
    this.store.select(getFormStyle)
      .subscribe(
        s => this.formStyles = s
      )
  }

  drop(event: CdkDragDrop<string[]|any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      const b = this.ids[event.previousIndex];
      this.ids[event.previousIndex] = this.ids[event.currentIndex];
      this.ids[event.currentIndex] = b;
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      let id = uuidv4()
      this.addField(id, this.form[event.currentIndex])
      this.ids.splice(event.currentIndex, 0, id)
    }
  }

  addField (id: string, typeField: string) {
    this.store.dispatch(createField({id: id, typeField: typeField}))
  }

  deleteElem (id: string) {
    const index = this.ids.indexOf(id);
    console.log(index)
    this.ids.splice(index, 1)
    this.form.splice(index, 1)
  }

  selectInput(type: string, id: any){
    this.click = true
    this.sharedDataService.sendMessage([
      type, id
    ]);
  }

}

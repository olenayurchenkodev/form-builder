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
  form: any = [];
  ids:any = [];
  click: boolean = false;
  receiveData:Subscription;

  constructor(
    private store: Store,
    private sharedDataService:SharedDataService,
    private deleteElemService: DeleteElemService
  ) {
    this.receiveData = this.deleteElemService.getClickEvent()
      .subscribe( message => this.deleteElem(message))
  }

  ngOnInit(){
    this.store.select(getFormStyle)
      .subscribe(
        s => this.formStyles = s
      )
  }

  drop(event: CdkDragDrop<string[]|any>) {
    if (event.previousContainer === event.container) {
      // console.log('prev, curr',event.previousIndex, event.currentIndex);
      this.changePos(this.ids, event.previousIndex, event.currentIndex);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // console.log('form',this.form); console.log('ids',this.ids)
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

  changePos (arr: any[], prev: number, curr: number) {
    let elem = arr[prev]
    let i = prev
    while (arr[i] !== arr[curr]) {
      if (prev < curr) {
        arr[i] = arr[i + 1]
        i++
      }
      else{
        arr[i] = arr[i - 1]
        i--
      }
    }
    arr[curr] = elem
  }

  addField (id: string, typeField: string) {
    this.store.dispatch(createField({id: id, typeField: typeField}))
  }

  deleteElem (id: string) {
    // console.log(id)
    const index = this.ids.indexOf(id);
    // console.log(index)
    this.ids.splice(index, 1)
    this.form.splice(index, 1)
    // console.log('form after delete',this.form);
  }

  selectInput(type: string, id: any){
    this.click = true
    this.sharedDataService.sendMessage([
      type, id
    ]);
  }

}

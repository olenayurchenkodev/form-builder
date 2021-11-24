import {Component} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {Subscription} from "rxjs";
import {SharedFormStyleService} from "../../../../services/shareFormStyles.service";
import {SharedDataService} from "../../../../services/shareElemData.service";
import {Store} from "@ngrx/store";
import {createField} from '../../../../store/actions/form.actions'


@Component({
  selector: 'form-builder-root',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.scss']
})
export class FormBuilderComponent{

  form = [];
  ids:any = [];
  click: boolean = false;
  formStyles: any = '';
  receiveFormData:Subscription;

  constructor(
    private store: Store,
    private sharedFormStyleService:SharedFormStyleService,
    private sharedDataService:SharedDataService
              ) {
    this.receiveFormData = this.sharedFormStyleService.getClickEvent()
      .subscribe( (message: any) => this.formStyles = message)
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
      this.addField(this.form.length, this.form[event.currentIndex])
      this.ids.splice(event.currentIndex, 0, this.form.length)
    }
  }

  addField (id: number, typeField: string) {
    this.store.dispatch(createField({id: id, typeField: typeField}))
  }

  selectInput(type: string, id: any){
    this.click = true
    this.sharedDataService.sendMessage([
      type, id
    ]);
  }

}

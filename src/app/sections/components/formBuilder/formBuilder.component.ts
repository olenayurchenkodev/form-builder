import {Component} from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray} from "@angular/cdk/drag-drop";
import {Observable, Subscription} from "rxjs";
import {SharedFormStyleService} from "../../../../services/shareFormStyles.service";
import {SharedFieldStyleService} from "../../../../services/shareFieldStyles.service";
import {SharedDataService} from "../../../../services/shareElemData.service";
import {select, Store} from "@ngrx/store";
import {createField} from '../../../../store/actions/form.actions'
import {getFieldStyle} from "../../../../store/reducers/form.reducers";


@Component({
  selector: 'form-builder-root',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.scss']
})
export class FormBuilderComponent{

  form = [];
  click: boolean = false;
  formStyles: any = '';
  fieldStyles: any = '';
  receiveFormData:Subscription;
  receiveFieldData:Subscription;
  styles$?: Observable<any>;

  constructor(
    private store: Store,
    private sharedFieldStyleService:SharedFieldStyleService,
    private sharedFormStyleService:SharedFormStyleService,
    private sharedDataService:SharedDataService
              ) {
    this.receiveFormData = this.sharedFormStyleService.getClickEvent()
      .subscribe( (message: any) => this.formStyles = message)
    // setTimeout(()=>{
    //   console.log(this.formStyles);
    // }, 10000)
    this.receiveFieldData = this.sharedFieldStyleService.getClickEvent()
      .subscribe( (message: any) => this.fieldStyles = message)
  }

  drop(event: CdkDragDrop<string[]|any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.addField(this.form.length, this.form[event.currentIndex])
    }
  }

  addField (id: number, typeField: string) {
    console.log(id, typeField);
    this.store.dispatch(createField({id: id, typeField: typeField}))
    this.styles$ = this.getField();
    console.log(this.styles$);
  }

  getField(): Observable<string> {
    return this.store.pipe(select(getFieldStyle));
  }

  selectInput(type: string, id: any){
    this.click = true
    this.sharedDataService.sendMessage([
      type, id
    ]);
    // console.log('in form builder',type, id);
  }



}

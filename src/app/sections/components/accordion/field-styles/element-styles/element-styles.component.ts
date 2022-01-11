import { FormControl, FormGroup } from "@angular/forms";
import {Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from "@ngrx/store";

import { addOption, deleteField, setField } from "src/store/actions/form.actions";
import { DeleteElemService } from "src/services/deleteElem.service";
import { getFieldStyle } from "../../../../../../store/selectors/form.selectors";
import { takeUntil } from "rxjs";
import { map } from "rxjs/operators";
import { BaseClass } from "../../../../../base.class";


@Component({
  selector: 'app-element-styles',
  templateUrl: './element-styles.component.html',
  styleUrls: ['./element-styles.component.scss']
})
export class ElementStylesComponent extends BaseClass implements OnChanges{
  public customStyles: { [key: string]: string | boolean } = {};
  public border: string[] = ["none","dotted","solid"];

  @Input() type: string = '';
  @Input() id: string = '';

  formStyle = new FormGroup({
    label: new FormControl(),
    backcolour: new FormControl(),
    placeholder: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
    required: new FormControl(),
    border: new FormControl(),
    newOption: new FormControl(),
  })

  constructor(
    private store: Store,
    private deleteElemService: DeleteElemService
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.store.select(getFieldStyle(this.id[0]))
      .pipe(
        takeUntil(this.unsubscribe$),
        map(s => {
          s ? this.formStyle.setValue(s): null;
        })
      )
      .subscribe()
  }

  sendStyles(): void {
    this.customStyles = {
      label: this.formStyle.value.label,
      backcolour: this.formStyle.value.backcolour,
      width: this.formStyle.value.width,
      height: this.formStyle.value.height,
      border: this.formStyle.value.border,
      required: this.formStyle.value.required,
      placeholder: this.formStyle.value.placeholder,
      newOption: '',
    }
    this.store.dispatch(setField({id: this.id, styles: this.customStyles}));
  }

  addOption(): void {
    this.store.dispatch(addOption({
      id: this.id[0],
      option: this.formStyle.value.newOption
    }));
  }

  deleteElem(): void {
    this.deleteElemService.sendMessage(this.id[0]);
    this.store.dispatch(deleteField({id: this.id[0]}));
  }
}

import { FormControl, FormGroup } from "@angular/forms";
import {Component, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";

import { setForm } from "src/store/actions/form.actions";
import {getFormStyle} from "../../../../../store/selectors/form.selectors";
import {takeUntil} from "rxjs";
import {map} from "rxjs/operators";
import {BaseClass} from "../../../../base.class";


@Component({
  selector: 'app-accordion-form-styles',
  templateUrl: './form-styles.component.html',
  styleUrls: ['./form-styles.component.scss']
})
export class FormStylesComponent extends BaseClass implements OnInit{
  public customStyles?: { [key: string]: string | boolean };
  public border: string[] = ['none', 'dotted', 'solid'];
  public fontWeight: string[] = [ "lighter","normal","bold"];

  public formStyle = new FormGroup({
    label: new FormControl(),
    colour: new FormControl(),
    backcolour: new FormControl(),
    border: new FormControl(),
    fontSize: new FormControl(),
    fontWeight: new FormControl(),
  })

  constructor(
    private store: Store
  ) {
    super();
  }

  ngOnInit(): void{
    this.store.select(getFormStyle)
      .pipe(
        takeUntil(this.unsubscribe$),
        map((s: any) => {
          if (s) {
            this.formStyle.setValue(s)
          }
        } ))
      .subscribe()
  }

  sendStyles(): void{
    this.customStyles = {
      label: this.formStyle.value.label,
      colour: `${this.formStyle.value.colour}`,
      backcolour: `${this.formStyle.value.backcolour}`,
      border: this.formStyle.value.border,
      fontSize: `${this.formStyle.value.fontSize}`,
      fontWeight: this.formStyle.value.fontWeight
    }
    this.store.dispatch(setForm({styles: this.customStyles}));
  }

}

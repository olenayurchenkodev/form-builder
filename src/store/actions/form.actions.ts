import {createAction, props} from "@ngrx/store";


export const createField = createAction(
  '[Field] createField',
  props<{id: number, typeField: string}>());

export const setField = createAction(
  '[Field] setField',
  props<{id: number, styles: any}>());

export const deleteField = createAction(
  '[Field] deleteField',
  props<{id: number}>());


export const addOption = createAction(
  '[Option] addOption',
  props<{id: number, option: string}>());

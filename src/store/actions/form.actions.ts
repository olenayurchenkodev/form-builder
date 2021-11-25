import {createAction, props} from "@ngrx/store";


export const createField = createAction(
  '[Field] createField',
  props<{id: string, typeField: string}>());

export const setField = createAction(
  '[Field] setField',
  props<{id: string, styles: any}>());

export const deleteField = createAction(
  '[Field] deleteField',
  props<{id: string}>());

export const setForm = createAction(
  '[Form] setField',
  props<{styles: any}>());

export const addOption = createAction(
  '[Option] addOption',
  props<{id: string, option: string}>());

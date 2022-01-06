import { createAction, props } from "@ngrx/store";


export const createField = createAction(
  '[Field] createField',
  props<{id: string, typeField: string}>());

export const setField = createAction(
  '[Field] setField',
  props<{id: string, styles: any}>());

export const deleteField = createAction(
  '[Field] deleteField',
  props<{id: string}>());

export const setValue = createAction(
  '[Field] setValueField',
  props<{id: string, value: string}>());

export const setForm = createAction(
  '[Form] setForm',
  props<{styles: any}>());

export const addOption = createAction(
  '[Option] addOption',
  props<{id: string, option: string}>());

export const setAuth = createAction(
  '[Auth] setAuth',
  props<{auth: string}>());

export const setAuthSuccess = createAction(
  '[Auth] setAuthSuccess',
  props<{auth: string}>());

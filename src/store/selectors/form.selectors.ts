import { createFeatureSelector, createSelector } from "@ngrx/store";

import { FieldStyle } from "../reducers/form.reducers";


export const selectFieldStyles = createFeatureSelector<FieldStyle>('fieldStyles');

export const getFieldStyle = (id: string) => createSelector(
  selectFieldStyles,
  (state: FieldStyle) => {
    return state.styles[state.id.indexOf(id)];
  }
);

export const getFormStyle = createSelector(
  selectFieldStyles,
  (state: FieldStyle) => {
    return state.Form;
  }
);

export const getAuth = createSelector(
  selectFieldStyles,
  (state: FieldStyle) => {
    return state.Auth;
  }
);

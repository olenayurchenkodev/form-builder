import {createAction, props} from "@ngrx/store";


export const createField = createAction('[Field] createField', props<{id: number, typeField: string}>());
export const setField = createAction('[Field] setField', props<{id: number}>());
export const deleteField = createAction('[Field] deleteField', props<{id: number}>());

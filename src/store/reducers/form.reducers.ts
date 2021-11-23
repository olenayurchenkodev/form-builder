import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import {createField, deleteField, setField} from "../actions/form.actions";

export interface FieldStyle{
  id: number[],
  styles: any[],
  Input?: { [key: string]: string | boolean },
  Textarea?: { [key: string]: string | boolean },
  Button?: { [key: string]: string | boolean },
  Checkbox?: { [key: string]: string | boolean },
  Select?: { [key: string]: string | boolean },
}

export const initialState: FieldStyle ={
  id: [],
  styles: [],
  Input: {
    label: 'label',
    placeholder: '',
    width: 'normal',
    height: 'normal',
    required: false
  },
  Textarea: {
    label: 'label',
    placeholder: '',
    width: 'normal',
    height: 'normal',
    required: false
  },
  Button:{
    label: 'label',
    width: 'normal',
    height: 'normal',
    required: false,
    border: '1px solid'
  },
  Checkbox:{
    label: 'label',
    width: 'normal',
    height: 'normal',
    required: false,
    newOption: ''
  },
  Select:{
    label: 'label',
    width: 'normal',
    height: 'normal',
    required: false,
    newOption: ''
  }
};

export const FormReducer = createReducer(
  initialState,
  on(createField, (state, {id, typeField})=>{
    let type = null;
    if (typeField === 'Input') {type = state.Input}
    if (typeField === 'Textarea') {type = state.Textarea}
    if (typeField === 'Button') {type = state.Button}
    if (typeField === 'Checkbox') {type = state.Checkbox}
    if (typeField === 'Select') {type = state.Select}
    return  {...state,
      id: [...state.id, id],
      styles: [ ...state.styles, type]
    };
  }),
  on(setField, (state, {id, typeField})=>{
    return  {...state,
      // styles: [ ...state.styles[id-1] = state[`${typeField}`]]
    };
  }),
  on(deleteField, (state, {id})=>{
    return  {...state,
      // id: [...state.id.pop(id-1)],
      // styles: [ ...state.styles.pop(id-1), ]
    };
  })
);

// export const getFieldStyles = createSelector(
//   createFeatureSelector('FieldStyle'),
//   (state: FieldStyle) => {
//     console.log(state.styles[0]);
//     return state.styles[0];
//   }
// );
export const selectFieldStyles = createFeatureSelector<FieldStyle>('FieldStyle');

export const getFieldStyle = createSelector(
  selectFieldStyles,
  (state: FieldStyle): any => state.styles[0]
);

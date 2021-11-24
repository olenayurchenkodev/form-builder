import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import {addOption, createField, setField} from "../actions/form.actions";

export interface FieldStyle{
  id: number[],
  styles: any[],
  Input?: { [key: string]: string | boolean },
  Textarea?: { [key: string]: string | boolean },
  Button?: { [key: string]: string },
  Checkbox?: { [key: string]: string | boolean | [] },
  Select?: { [key: string]: string | boolean | [] },
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
    label: 'button',
    width: 'normal',
    height: 'normal',
    border: '1px solid'
  },
  Checkbox:{
    label: 'label',
    width: 'normal',
    height: 'normal',
    required: false,
    newOption: []
  },
  Select:{
    label: 'label',
    width: 'normal',
    height: 'normal',
    required: false,
    newOption: []
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
  on(setField, (state, {id, styles})=>{
    // console.log('in reducer',state.styles[id - 1]);
    // console.log('in reducer',id, styles);
    let newStyles: any = {};
    for (let item in styles){
      // console.log('in loop',styles[item]);
      styles[item] && item !== 'newOption'?
        newStyles[item] = styles[item]:
        newStyles[item] = state.styles[id - 1][item]
    }
    // console.log('in reducer',newStyles);
    let entrie = JSON.parse(JSON.stringify(state.styles));
    entrie[id-1] = newStyles;
    // console.log('in reducer',entrie.styles);
    return  {...state,
      styles: entrie
    };
  }),
  on(addOption, (state, {id, option})=>{
    // console.log('in reducer',state.styles, option)
    let entrie = JSON.parse(JSON.stringify(state.styles));
    entrie[id-1].newOption.push(option);
    return {...state,
      styles: entrie
    }
  })
);


export const selectFieldStyles = createFeatureSelector<FieldStyle>('fieldStyles');

export const getFieldStyle = (id: number) => createSelector(
  selectFieldStyles,
  (state: FieldStyle) => {
    console.log('in selector',id);
    return state.styles[id];
  }
);

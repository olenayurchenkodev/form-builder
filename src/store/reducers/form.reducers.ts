import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import {addOption, createField, deleteField, setField, setForm} from "../actions/form.actions";

export interface FieldStyle{
  id: string[],
  styles: any[],
  Input?: { [key: string]: string | boolean },
  Textarea?: { [key: string]: string | boolean },
  Button?: { [key: string]: string },
  Checkbox?: { [key: string]: string | boolean | [] },
  Select?: { [key: string]: string | boolean | [] },
  Form?: { [key: string]: string | boolean | [] }
}

export const initialState: FieldStyle ={
  id: [],
  styles: [],
  Input: {
    label: 'label',
    placeholder: '',
    width: '100%',
    height: '60px',
    required: false
  },
  Textarea: {
    label: 'label',
    placeholder: '',
    width: '100%',
    height: '60px',
    required: false
  },
  Button:{
    label: 'button',
    width: '30%',
    height: '40px',
    border: 'none'
  },
  Checkbox:{
    label: 'label',
    width: '100%',
    height: '60px',
    required: false,
    newOption: []
  },
  Select:{
    label: 'label',
    width: '100%',
    height: '30px',
    required: false,
    newOption: []
  },
  Form: {
    label: 'Form Builder',
    colour: 'black',
    backcolour: 'white',
    border: '1px solid',
    fontSize: '24px',
    fontWeight: 'normal',
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
    console.log('in reducer',state);
    let newStyles: any = {};
    for (let item in styles){
      console.log('in loop',item);
      styles[item] && item !== 'newOption'?
        newStyles[item] = styles[item]:
        newStyles[item] = state.styles[state.id.indexOf(id[0])][item]

      if (item === 'newOption'){ newStyles.newOption = state.styles[state.id.indexOf(id[0])].newOption}
    }
    let entrie = JSON.parse(JSON.stringify(state.styles));
    console.log('entrie', entrie);
    entrie[state.id.indexOf(id[0])] = newStyles;
    console.log('in reducer',entrie.styles);
    return  {...state,
      styles: entrie
    };
  }),
  on(deleteField, (state, {id})=>{
    console.log(id, state.id.indexOf(id))
    let entrieStyles = JSON.parse(JSON.stringify(state.styles));
    let entrieIds = JSON.parse(JSON.stringify(state.id));
    entrieIds.splice(state.id.indexOf(id), 1)
    entrieStyles.splice(state.id.indexOf(id), 1)
    console.log(entrieIds, entrieStyles)
    return {...state,
      styles: entrieStyles,
      id: entrieIds
    }
  }),
  on(setForm, (state, {styles})=>{
    let newStyles: any = {};
    if (state.Form){
      for (let item in styles){
        styles[item]?
          newStyles[item] = styles[item]:
          newStyles[item] = state.Form[item]
      }
      return  {...state,
       Form: newStyles
      };
    }
    return  {...state};
  }),
  on(addOption, (state, {id, option})=>{
    console.log('in reducer',state.styles, option)
    let entrie = JSON.parse(JSON.stringify(state.styles));
    entrie[state.id.indexOf(id[0])].newOption.push(option);
    return {...state,
      styles: entrie
    }
  })
);


export const selectFieldStyles = createFeatureSelector<FieldStyle>('fieldStyles');

export const getFieldStyle = (id: string) => createSelector(
  selectFieldStyles,
  (state: FieldStyle) => {
    // console.log('in selector',id);
    // console.log('in selector',state.id);
    return state.styles[state.id.indexOf(id)];
  }
);

export const getFormStyle = createSelector(
  selectFieldStyles,
  (state: FieldStyle) => {
    // console.log('selector blyat`',state.Form)
    return state.Form;
  }
);

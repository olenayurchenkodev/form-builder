import { createReducer, on } from '@ngrx/store';

import {addOption, createField, deleteField, setAuth, setField, setForm } from "../actions/form.actions";
import { initialState } from "../../app/config";


export interface FieldStyle{
  id: string[],
  styles: any[],
  input?: { [key: string]: string | boolean | []  },
  textarea?: { [key: string]: string | boolean | []  },
  button?: { [key: string]: string | boolean | []  },
  checkbox?: { [key: string]: string | boolean | [] },
  select?: { [key: string]: string | boolean | [] },
  Form?: { [key: string]: string | boolean | [] },
  Auth: string
}

export const FormReducer = createReducer<FieldStyle>(
  initialState,
  on(createField, (state, {id, typeField})=>{
    let type = null;
    if (typeField === 'input') {type = state.input}
    if (typeField === 'textarea') {type = state.textarea}
    if (typeField === 'button') {type = state.button}
    if (typeField === 'checkbox') {type = state.checkbox}
    if (typeField === 'select') {type = state.select}
    return  {...state,
      id: [...state.id, id],
      styles: [ ...state.styles, type]
    };
  }),
  on(setField, (state, {id, styles})=>{
    let newStyles: any = {};
    for (let item in styles){
      newStyles[item] = styles[item]
    }
    let entrie = JSON.parse(JSON.stringify(state.styles));
    entrie[state.id.indexOf(id[0])] = newStyles;
    return  {...state,
      styles: entrie
    };
  }),
  on(deleteField, (state, {id})=>{
    let entrieStyles = JSON.parse(JSON.stringify(state.styles));
    let entrieIds = JSON.parse(JSON.stringify(state.id));
    entrieIds.splice(state.id.indexOf(id), 1)
    entrieStyles.splice(state.id.indexOf(id), 1)
    return {...state,
      styles: entrieStyles,
      id: entrieIds
    }
  }),
  on(setForm, (state, {styles})=>{
    let newStyles: any = {};
    for (let item in styles){
      newStyles[item] = styles[item];
    }
    return  {...state,
     Form: newStyles
    };
  }),
  on(addOption, (state, {id, option})=>{
    let entrie = JSON.parse(JSON.stringify(state.styles));
    entrie[state.id.indexOf(id)].newOption.push(option);
    return {...state,
      styles: entrie
    }
  }),
  on(setAuth, (state, {auth})=>{
    return {...state,
      Auth: auth
    }
  })
);

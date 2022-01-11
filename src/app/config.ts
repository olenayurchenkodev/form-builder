import {FieldStyle} from "../store/reducers/form.reducers";

export const URL = 'http://localhost:3000'

export const initialState: FieldStyle = {
  id: [],
  styles: [],
  input: {
    label: 'input label',
    backcolour: '255, 255, 255',
    placeholder: '',
    width: '400',
    height: '40',
    border: 'none',
    required: false,
    newOption: []
  },
  textarea: {
    label: 'textarea label',
    backcolour: '255, 255, 255',
    placeholder: '',
    width: '400',
    height: '50',
    border: 'none',
    required: false,
    newOption: []
  },
  button:{
    label: 'button',
    backcolour: '235, 235, 235',
    width: '100',
    placeholder: '',
    height: '40',
    required: false,
    border: 'none',
    newOption: []
  },
  checkbox:{
    label: 'checkbox label',
    backcolour: '255, 255, 255',
    placeholder: '',
    width: '400',
    height: '30',
    required: false,
    border: 'none',
    newOption: []
  },
  select: {
    label: 'select label',
    backcolour: '255, 255, 255',
    width: '400',
    placeholder: '',
    height: '40',
    border: 'none',
    required: false,
    newOption: []
  },
  Form: {
    label: 'Form Builder',
    colour: '0, 0, 0',
    backcolour: '255, 255, 255',
    border: 'solid',
    fontSize: '24',
    fontWeight: 'normal',
  },
  Auth: ''
};

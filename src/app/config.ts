import {FieldStyle} from "../store/reducers/form.reducers";

export const URL = 'http://localhost:3000'

export const initialState: FieldStyle = {
  id: [],
  styles: [],
  input: {
    label: 'input label',
    backcolour: 'none',
    placeholder: '',
    width: '100%',
    height: '40px',
    required: false
  },
  textarea: {
    label: 'textarea label',
    backcolour: 'none',
    placeholder: '',
    width: '100%',
    height: '50px',
    required: false
  },
  button:{
    label: 'button',
    backcolour: '#EEF2F4',
    width: '30%',
    height: '40px',
    border: 'none'
  },
  checkbox:{
    label: 'checkbox label',
    backcolour: 'none',
    width: '100%',
    height: '30px',
    required: false
  },
  select:{
    label: 'select label',
    backcolour: 'none',
    width: '100%',
    height: '40px',
    required: false,
    newOption: []
  },
  Form: {
    label: 'Form Builder',
    colour: 'black',
    backcolour: 'none',
    border: '1px solid',
    fontSize: '24px',
    fontWeight: 'normal',
  },
  Auth: ''
};

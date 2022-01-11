import * as fromReducer from './form.reducers';
import {initialState} from "../../app/config";
import {addOption, createField, deleteField, setAuth, setField, setForm} from "../actions/form.actions";
import {FieldStyle} from "./form.reducers";

describe('FormReducer', () => {
  describe('createField', () => {
    it('should return the input styles', () => {
      const state = fromReducer.FormReducer(initialState, createField({id: 'id123', typeField: 'input'}));
      const newState: FieldStyle = {...initialState,
        id: ['id123'],
        styles: [ {
          label: 'input label',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '40',
          border: 'none',
          required: false,
          newOption: []
        }]
      };
      expect(state).toEqual(newState);
    });
    it('should return the input styles', () => {
      const state = fromReducer.FormReducer(initialState, createField({id: 'id123', typeField: 'input'}));
      const newState: FieldStyle = {...initialState,
        id: ['id123'],
        styles: [ {
          label: 'input label',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '40',
          border: 'none',
          required: false,
          newOption: []
        }]
      };
      expect(state).toEqual(newState);
    });
    it('should return the textarea styles', () => {
      const state = fromReducer.FormReducer(initialState, createField({id: 'id123', typeField: 'textarea'}));
      const newState: FieldStyle = {...initialState,
        id: ['id123'],
        styles: [ {
          label: 'textarea label',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '50',
          border: 'none',
          required: false,
          newOption: []
        }]
      };
      expect(state).toEqual(newState);
    });
    it('should return the button styles', () => {
      const state = fromReducer.FormReducer(initialState, createField({id: 'id123', typeField: 'button'}));
      const newState: FieldStyle = {...initialState,
        id: ['id123'],
        styles: [ {
          label: 'button',
          backcolour: '235, 235, 235',
          width: '100',
          placeholder: '',
          height: '40',
          required: false,
          border: 'none',
          newOption: []
        }]
      };
      expect(state).toEqual(newState);
    });
    it('should return the checkbox styles', () => {
      const state = fromReducer.FormReducer(initialState, createField({id: 'id123', typeField: 'checkbox'}));
      const newState: FieldStyle = {...initialState,
        id: ['id123'],
        styles: [{
          label: 'checkbox label',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '30',
          required: false,
          border: 'none',
          newOption: []
        }]
      };
      expect(state).toEqual(newState);
    });
    it('should return the select styles', () => {
      const state = fromReducer.FormReducer(initialState, createField({id: 'id123', typeField: 'select'}));
      const newState: FieldStyle = {...initialState,
        id: ['id123'],
        styles: [ {
          label: 'select label',
          backcolour: '255, 255, 255',
          width: '400',
          placeholder: '',
          height: '40',
          border: 'none',
          required: false,
          newOption: []
        }]
      };
      expect(state).toEqual(newState);
    });
  });
  describe('setField', ()=>{
    it('should return new styles input', () => {
      const state = fromReducer.FormReducer({...initialState,
        id: ['id123'],
        styles: [{
          label: '',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '40',
          border: 'none',
          required: false,
          newOption: []
        }]
      }, setField({id: 'id123', styles: {
          label: '',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '40',
          border: 'none',
          required: false,
          newOption: []
        }}));
      const newState: FieldStyle = {...initialState,
        id: ['id123'],
        styles: [ {
          label: '',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '40',
          border: 'none',
          required: false,
          newOption: []
        }]
      };
      expect(state.styles[0]).toEqual(newState.styles[0]);
    });
  });
  describe('deleteField', ()=>{
    it('should work properly', () => {
      const state = fromReducer.FormReducer({...initialState,
        id: [...initialState.id, 'id123'],
        styles: [...initialState.styles, {
          label: 'input label',
          backcolour: '255, 255, 255',
          placeholder: '',
          width: '400',
          height: '40',
          border: 'none',
          required: false,
          newOption: ''
        }]
      }, deleteField({id: 'id123'}));
      const newState: FieldStyle = {...initialState};
      expect(state).toEqual(newState);
    });
  });
  describe('setForm', ()=>{
    it('should work properly', () => {
      const customStyles = {
        label: 'lll',
        colour: 'lll',
        backcolour: 'lll',
        border: 'lll',
        fontSize: 'lll',
        fontWeight: 'lll',
      }
      const state = fromReducer.FormReducer(initialState, setForm({styles: customStyles}));
      const newState: FieldStyle = {...initialState, Form: customStyles};
      expect(state).toEqual(newState);
    });
    it('should work properly without changes', () => {
      const customStyles = {
        label: 'Form Builder',
        colour: '0, 0, 0',
        backcolour: '255, 255, 255',
        border: 'solid',
        fontSize: '24',
        fontWeight: 'normal',
      }
      const state = fromReducer.FormReducer(initialState, setForm({styles: customStyles}));
      const newState: FieldStyle = {...initialState};
      expect(state).toEqual(newState);
    });
  });
  describe('addOption', ()=>{
    it('should work properly', () => {
      const state = fromReducer.FormReducer({...initialState,
        id: ['id123'],
        styles: [{
          label: 'select label',
          backcolour: '255, 255, 255',
          width: '400',
          placeholder: '',
          height: '40',
          border: 'none',
          required: false,
          newOption: []
        }]
      }, addOption({id: 'id123', option: 'new option 1'}));
      const newState: FieldStyle = {
        ...initialState,
        id: ['id123'],
        styles: [{
          label: 'select label',
          backcolour: '255, 255, 255',
          width: '400',
          placeholder: '',
          height: '40',
          border: 'none',
          required: false,
          newOption: ['new option 1']
        }]
      };
      expect(state).toEqual(newState);
    });
  })
  describe('setAuth', ()=>{
    it('should work properly', () => {
      const state = fromReducer.FormReducer(initialState, setAuth({auth: '111'}));
      const newState: FieldStyle = {
        ...initialState,
        Auth: '111'
      };
      expect(state).toEqual(newState);
    });
  })
});

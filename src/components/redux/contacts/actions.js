import { createAction } from '@reduxjs/toolkit';
import {
  FORM_FETCH,
  FORM_SUCCESS,
  FORM_ERROR,
  ADD_MY_CONTACT,
  DEL_MY_CONTACT,
  FILTERED_ITEMS,
} from './types';

export const addMyContact = createAction(ADD_MY_CONTACT);
export const delMyContact = createAction(DEL_MY_CONTACT);
export const filteredItems = createAction(FILTERED_ITEMS);
// export const setLocalStorege = createAction('phonebook/setLocalStorege');

export const getFormValueFetch = createAction(FORM_FETCH);
export const getFormValueSuccess = createAction(FORM_SUCCESS);
export const getFormValueError = createAction(FORM_ERROR);

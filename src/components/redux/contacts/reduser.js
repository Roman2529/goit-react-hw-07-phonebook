import { createReducer } from '@reduxjs/toolkit';
import {
  FORM_FETCH,
  FORM_SUCCESS,
  FORM_ERROR,
  ADD_MY_CONTACT,
  DEL_MY_CONTACT,
  FILTERED_ITEMS,
} from './types';

const initialState = {
  contacts: {
    items: [],
    filter: [],
  },
  isLoading: false,
};

export const phonebookReducer = createReducer(initialState, {
  [ADD_MY_CONTACT]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...payload],
    },
  }),

  [FORM_FETCH]: (state, { payload }) => ({
    ...state,
    isLoading: !state.isLoading,
  }),

  [FORM_SUCCESS]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, payload],
    },
  }),

  [FORM_ERROR]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: [...state.contacts.items, payload],
    },
  }),

  [DEL_MY_CONTACT]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      items: state.contacts.items.filter(contact => contact.id !== payload),
      filter: state.contacts.filter.filter(contact => contact.id !== payload),
    },
  }),

  // [actions.setLocalStorege]: (state, { payload }) => ({
  //   ...state,
  //   contacts: {
  //     ...state.contacts,
  //     items: [...payload],
  //   },
  // }),

  [FILTERED_ITEMS]: (state, { payload }) => ({
    ...state,
    contacts: {
      ...state.contacts,
      filter: [...payload],
    },
  }),
});

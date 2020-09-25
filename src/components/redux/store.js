// import { phonebookReducer } from './contacts/reduser';
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: phonebookReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from '../middlewares/logger';
import { phonebookReducer } from './contacts/reduser';

const middleWares = [logger];
const store = createStore(
  phonebookReducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);

export default store;

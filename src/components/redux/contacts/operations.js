import axios from 'axios';
import {
  getFormValueSuccess,
  getFormValueFetch,
  getFormValueError,
  addMyContact,
} from './actions';

export const getFitebase = param => async (dispatch, getState) => {
  try {
    const data = await axios.get(
      `https://phonebook-by-roman.firebaseio.com/contacts.json`,
    );
    const keys = Object.keys(data.data);

    const resArr = keys.reduce((acc, key) => {
      acc.push({ id: key, ...data.data[key] });
      return acc;
    }, []);

    dispatch(addMyContact(resArr));
  } catch (error) {
    console.log(error);
  }
};

export const postAsync = param => async (dispatch, getState) => {
  dispatch(getFormValueFetch());
  try {
    const data = await axios.post(
      `https://phonebook-by-roman.firebaseio.com/contacts.json`,
      param,
    );
    console.log('data post', data);
    dispatch(getFormValueSuccess({ ...param, id: data.data.name }));
  } catch (error) {
    dispatch(getFormValueError(error));
  } finally {
    dispatch(getFormValueFetch());
  }
};

export const deleteContactOnFirebase = id => async (dispatch, getState) => {
  console.log('id', id);
  try {
    const data = await axios.delete(
      `https://phonebook-by-roman.firebaseio.com/contacts/${id}.json`,
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

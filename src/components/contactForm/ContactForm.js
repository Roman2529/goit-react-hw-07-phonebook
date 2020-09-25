import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import '../../components/App.css';
import { v4 as uuidv4 } from 'uuid';
import styles from './form.module.css';
import { Alert } from '../alert/Alert';
import { addMyContact } from '../redux/contacts/actions';
import { postAsync } from '../redux/contacts/operations';

const ContactForm = ({ items }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [allertShow, setAllertShow] = useState(false);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const dispatch = useDispatch();

  const submitForm = e => {
    e.preventDefault();
    const lookingFor = items.find(el => el.name === name);
    if (lookingFor) {
      setAllertShow(true);
      setTimeout(() => {
        setAllertShow(false);
      }, 2000);
      setName('');
      setNumber('');
    } else {
      dispatch(postAsync({ name: name, number: number, id: uuidv4() }));
      setName('');
      setNumber('');
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <CSSTransition
          in={allertShow}
          classNames="alert"
          timeout={2000}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>
        <div className={styles.formSection}>
          <label className={styles.label}>
            Name
            <input
              name="name"
              type="text"
              className={styles.input}
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <label className={styles.label}>
            Number
            <input
              name="number"
              type="text"
              className={styles.input}
              value={number}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add Contact
          </button>
        </div>
      </form>
    </>
  );
};
const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = {
  addMyContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

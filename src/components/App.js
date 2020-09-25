import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm.js';
import ContactList from './contactList/ContactList.js';
import Filter from './filter/Filter.js';
// import { setLocalStorege } from './redux/contacts/actions';
import './App.css';
import styles from './app.module.css';
import { connect } from 'react-redux';
import { getFitebase } from './redux/contacts/operations';

function App({ items, getFitebase, isLoading }) {
  // useEffect(() => {
  //   const items = localStorage.getItem('items');
  //   const itemsParsed = JSON.parse(items);
  //   if (itemsParsed) {
  //     setLocalStorege(itemsParsed);
  //   }
  // }, [setLocalStorege]);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items]);

  useEffect(() => {
    getFitebase();
  }, [getFitebase]);

  return (
    <>
      <div className={styles.page}>
        {isLoading && <h2>...loading...</h2>}
        <CSSTransition
          in={true}
          timeout={500}
          classNames="main-title"
          appear
          unmountOnExit
        >
          <h2 className={styles.title}>Phonebook</h2>
        </CSSTransition>
        <ContactForm />
        {items.length > 1 ? <Filter /> : null}
        <ContactList />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  items: state.contacts.items,
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  getFitebase, // setLocalStorege,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

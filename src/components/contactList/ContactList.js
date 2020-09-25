import React from 'react';
import ContactItem from './contactItem/ContactItem.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './contactList.module.css';
import { connect } from 'react-redux';

function ContactList({ x }) {
  return (
    <TransitionGroup component="ul" className={styles.contactList}>
      {x.map(el => (
        <CSSTransition
          key={el.id}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <ContactItem key={el.id} contact={el} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
const mapStateToProps = state => ({
  x:
    state.contacts.filter.length > 0
      ? state.contacts.filter
      : state.contacts.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

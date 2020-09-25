import React from 'react';
import styles from './contactItem.module.css';
import { delMyContact } from '../../redux/contacts/actions';
import { connect } from 'react-redux';
import { deleteContactOnFirebase } from '../../redux/contacts/operations';

function ContactItem({
  deleteContactOnFirebase,
  delMyContact,
  contact: { name, number, id },
}) {
  const onButtonDelete = id => {
    deleteContactOnFirebase(id);
    delMyContact(id);
  };
  return (
    <li className={styles.contactItems}>
      <p>
        {name}: {number}
      </p>
      <button type="button" data-id={id} onClick={() => onButtonDelete(id)}>
        Delete
      </button>
    </li>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  delMyContact,
  deleteContactOnFirebase,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

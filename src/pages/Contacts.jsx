import { FindContacts } from 'components/FindContacts/FindContacts';
import { FormPhonebook } from 'components/FormPhonebook/FormPhonebook';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/selectors';
import ModalNotify from 'components/ModalNotify/ModalNotify';
import { useState, useEffect } from 'react';

const {
  ContactsPhonebook,
} = require('components/ContactsPhonebook/ContactsPhonebook');

const Contacts = () => {
  const [showModal, setShowModal] = useState(true);
  const token = useSelector(getToken);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showModal]);

  return (
    <>
      {showModal && <ModalNotify />}
      {token && (
        <>
          <FormPhonebook />
          <FindContacts />
          <ContactsPhonebook />
        </>
      )}
    </>
  );
};

export default Contacts;

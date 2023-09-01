import React, { useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useContacts } from 'hooks/useContact';

export const Contacts = () => {
  const { contacts, fetchAllContacts } = useContacts();

  useEffect(() => {
    fetchAllContacts();
  }, [fetchAllContacts]);

  return (
    <div>
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts && contacts.length !== 0 && <Filter />}
      <ContactList />
    </div>
  );
};

import React, { useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useContacts } from 'hooks/useContact';
import { Box, Grid } from '@mui/material';

export const Contacts = () => {
  const { contacts, fetchAllContacts } = useContacts();

  useEffect(() => {
    fetchAllContacts();
  }, [fetchAllContacts]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Box
        component="div"
        sx={{ mt: 1, width: '100%', maxWidth: 350, textAlign: 'center' }}
      >
        <ContactForm />
        <h2>Contacts</h2>
        {contacts && contacts.length !== 0 && <Filter />}
        <ContactList />
      </Box>
    </Grid>
  );
};

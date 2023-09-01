import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import { useContacts } from 'hooks/useContact';

import Box from '@mui/material/Box';
import List from '@mui/material/List';

export const ContactList = () => {
  const { filteredContacts } = useContacts();

  return (
    <Box component="div" sx={{ width: '100%', maxWidth: 350 }}>
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })}
      </List>
    </Box>
  );
};

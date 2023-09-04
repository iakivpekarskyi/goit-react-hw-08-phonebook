import { useContacts } from 'hooks/useContact';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, List, Typography } from '@mui/material';

export const ContactListItem = ({ id, name, number }) => {
  const { removeContact } = useContacts();

  return (
    <List>
      <Box
        component="div"
        sx={{ display: { xs: 'flex' }, width: '100%', m: 1 }}
      >
        <Box
          component="div"
          sx={{
            display: { xs: 'flex' },
            flexWrap: 'wrap',
            flexGrow: 1,
          }}
        >
          <Typography
            variant="span"
            sx={{ mr: 4, flexGrow: 1, textAlign: 'left', fontWeight: 'bold' }}
          >
            {name}
          </Typography>
          <Typography variant="span" sx={{ mr: 1 }}>
            {number}
          </Typography>
        </Box>
        <HighlightOffIcon
          sx={{ color: '#000a', cursor: 'pointer' }}
          onClick={() => removeContact(id)}
        />
      </Box>
    </List>
  );
};

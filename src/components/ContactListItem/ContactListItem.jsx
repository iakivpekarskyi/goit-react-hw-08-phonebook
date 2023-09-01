import { ListItem, Text, ButtonContainer } from './ContactListItem.styled';
import { useContacts } from 'hooks/useContact';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ContactListItem = ({ id, name, number }) => {
  const { removeContact } = useContacts();

  return (
    <ListItem>
      <Text>
        {name} : {number}
      </Text>
      <ButtonContainer>
        <DeleteOutlineIcon
          sx={{ color: '#000a', cursor: 'pointer' }}
          onClick={() => removeContact(id)}
        />
      </ButtonContainer>
    </ListItem>
  );
};

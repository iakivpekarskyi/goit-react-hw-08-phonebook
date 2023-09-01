import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormikForm, FormikField } from './ContactForm.styled';

import { useContacts } from 'hooks/useContact';

import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const { addNewContact, contacts } = useContacts();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const newName = values.name;

      if (contacts.find(contact => contact.name === newName)) {
        alert(`${newName} is already in contacts list`);
        return;
      }

      addNewContact(values);
      resetForm();
    } catch (error) {
      console.error('Error while handling form submission:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off">
        <Box marginY={2} sx={{ width: 350 }}>
          <FormikField
            component={TextField}
            label="Name*"
            type="text"
            name="name"
            size="small"
            fullWidth
          />
        </Box>

        <Box marginY={4} sx={{ width: 350 }}>
          <FormikField
            component={TextField}
            label="Number*"
            type="tel"
            name="number"
            size="small"
            fullWidth
          />
        </Box>

        <Button type="submit" fullWidth variant="contained" size="medium">
          Add contact
        </Button>
      </FormikForm>
    </Formik>
  );
};

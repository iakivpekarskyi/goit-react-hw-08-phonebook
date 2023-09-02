import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';

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
    <>
      <h2>Add Contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Box marginY={1} sx={{ width: 350 }}>
            <Field
              component={TextField}
              label="Name*"
              type="text"
              name="name"
              size="small"
              fullWidth
              autoFocus
            />
          </Box>

          <Box marginY={2} sx={{ width: 350 }}>
            <Field
              component={TextField}
              label="Number*"
              type="tel"
              name="number"
              size="small"
              fullWidth
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="medium"
            sx={{ mb: 7 }}
          >
            Add contact
          </Button>
        </Form>
      </Formik>
    </>
  );
};

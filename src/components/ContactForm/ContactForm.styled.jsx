import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const FormikField = styled(Field)`
  font-size: large;
  width: 160px;
  height: 30px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #cfcfcf;
`;

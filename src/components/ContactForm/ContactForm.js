import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  FormDiv,
  FormField,
  StyledErrorMessage,
  StyledButton,
  StyledForm,
} from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  contactName: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  contactNumber: Yup.string()
    .matches(
      /^(\d{1,4}[-\s]?\(?\d{1,3}?\)?[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,9})?$/,
      'Phone number must be in the format of ЧЧЧ-ЧЧ-ЧЧ.'
    )
    .required('Required'),
});

export const ContactForm = ({ addContacts }) => {
  return (
    <div>
      <Formik
        initialValues={{
          contactName: '',
          contactNumber: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          addContacts(values.contactName, values.contactNumber);
        }}
      >
        {() => (
          <StyledForm>
            <FormDiv>
              <Label htmlFor="contactName" className="firstLabel">
                name
              </Label>
              <FormField
                type="text"
                id="contactName"
                name="contactName"
                placeholder="enter name"
                autocomplete="off"
              />
              <StyledErrorMessage name="contactName" component="div" />
            </FormDiv>
            <FormDiv>
              <Label htmlFor="contactNumber">number</Label>
              <FormField
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="enter phone numb"
                autocomplete="off"
              />
              <StyledErrorMessage name="contactNumber" component="div" />
            </FormDiv>
            <StyledButton type="submit">submit</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

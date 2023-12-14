import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('This field is required!'),
  email: Yup.string().email().required('This field is required!'),
  password: Yup.string()
    .min(7, 'Password should be minimum 7 characters!')
    .required('This field is required!'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={registerSchema}
    onSubmit={handleSubmit}
  >
    <Form autoComplete="off">
      <label>
        Name
        <Field name="name" />
        <ErrorMessage name="name" component="div" />
      </label>
      <label>
        Email
        <Field name="email" />
        <ErrorMessage name="email" component="div" />
      </label>
      <label>
        Password
        <Field name="password" />
        <ErrorMessage name="password" component="div" />
      </label>
      <button type="submit">Register</button>
    </Form>
  </Formik>
);
};
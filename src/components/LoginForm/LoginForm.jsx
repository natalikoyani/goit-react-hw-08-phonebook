import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('This field is required!'),
  password: Yup.string().required('This field is required!'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
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

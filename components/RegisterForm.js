import { Formik, Field, Form } from 'formik'

export const RegisterForm = ({ styles }) => (
  <>
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
      }}
    >
      <Form>
        <label className={styles.label} htmlFor='Name'>
          Full Name
        </label>
        <Field className={styles.field} id='name' name='name' />

        <label className={styles.label} htmlFor='Email'>
          Email
        </label>
        <Field className={styles.field} id='email' name='email' />

        <label className={styles.label} htmlFor='Password'>
          Password
        </label>
        <Field className={styles.field} id='Password' name='Password' />
        <div class='mt-8'>
          <button type='submit' className={styles.button}>
            Register
          </button>
        </div>
      </Form>
    </Formik>
  </>
)

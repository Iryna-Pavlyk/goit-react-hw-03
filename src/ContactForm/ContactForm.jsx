import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "To Short!")
    .max(50, "To Long!")
    .required("Required!"),
  number: Yup.string().trim().min(7, "To Short!").max(15).required("Required!"),
});

const ContactForm = ({ onAdd }) => {
  const nameId = nanoid();
  const numberId = nanoid();

  const values = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nameId,
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={values}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field
              type="text"
              name="name"
              id={nameId}
              placeholder="Iryna Pavlyk"
            ></Field>
            <ErrorMessage className={css.err} name="name" component="span" />
          </div>

          <div>
            <label htmlFor={numberId}>Number</label>
            <Field
              type="text"
              name="number"
              id={numberId}
              placeholder="111-11-11"
            ></Field>
            <ErrorMessage className={css.err} name="number" component="span" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;

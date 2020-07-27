import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";

export interface LoginData {
  email: string;
  password: string;
}

const loginData: LoginData = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6).max(16),
});

export default function HomePage() {
  function handleSubmit(data: LoginData) {
    console.log(data);
  }

  return (
    <>
      <div className="row">
        <div className="col pt-5">
          <h1 className="text-muted border-bottom pb-3">Home page</h1>
          <p className="text-muted">Form example!</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Formik
            validationSchema={loginSchema}
            initialValues={loginData}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form>
                <div className="form-group">
                  <Field
                    className="form-control"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <ErrorMessage name="email" />
                </div>
                <div className="form-group">
                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Senha"
                  />
                  <ErrorMessage name="password" />
                </div>
                <button className="btn btn-primary">Entrar</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

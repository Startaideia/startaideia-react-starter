import React from "react";
import { Form, Input, Submit } from "@startaideia/react-forms";
import { useHistory } from "react-router-dom";

import { Container, Footer, Brand, Link } from "./styles";
import logo from "assets/images/logo.png";

function Register() {
  const history = useHistory();

  function handleSubmit() {
    history.push("/");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} theme="starter-theme">
        <Form.Col className="pt-5">
          <div>Seja bem-vindo</div>
          <div>Faça seu cadastro</div>
        </Form.Col>

        <Input.Text name="username" label="Nome de usuário" isRequired />
        <Input.Email isRequired />
        <Input.Password isRequired />
        <Input.Password
          name="password_confirmation"
          label="Confirme a senha"
          isRequired
        />
        <Form.Col xs={12}>
          <Link to="/auth/login">Já tenho uma conta</Link>
        </Form.Col>
        <Form.Footer>
          <Submit className="w-100">Criar uma conta</Submit>
        </Form.Footer>
        <Form.Col xs={12} className="text-center pt-3">
          <Link to="/">Voltar para a home</Link>
        </Form.Col>
      </Form>
      <Footer>
        <Brand src={logo} />
      </Footer>
    </Container>
  );
}

export default Register;

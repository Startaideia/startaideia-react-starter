import React from "react";
import { Form, Input, Group, Submit } from "@startaideia/react-forms";
import { useHistory } from "react-router-dom";

import { Container, Footer, Brand, Link } from "./styles";
import logo from "assets/images/logo.png";

function Login() {
  const history = useHistory();

  function handleSubmit() {
    history.push("/");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} theme="starter-theme">
        <Form.Col className="pt-5">
          <div>Seja bem-vindo</div>
          <div>Faça login para continuar</div>
        </Form.Col>

        <Input.Email isRequired />
        <Input.Password isRequired />
        <Form.Col>
          <Link to="/auth/forgot-password">Esqueci minha senha</Link>
        </Form.Col>
        <Form.Col className="text-right">
          <Link to="/auth/register">Criar uma nova conta</Link>
        </Form.Col>
        <Group name="remember_me">
          <Group.Checkbox value="on" label="Mantenha-me conectado" />
        </Group>
        <Form.Footer>
          <Submit className="w-100">Entrar</Submit>
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

export default Login;

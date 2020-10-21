import React from "react";
import { Form, Input, Submit } from "@startaideia/react-forms";

import { Container, Footer, Brand, Link } from "./styles";
import logo from "assets/images/logo.png";

function ForgotPassword() {
  return (
    <Container>
      <Form theme="starter-theme">
        <Form.Col className="pt-5">
          <div>Vamos te ajudar!</div>
          <div>Recupere sua senha</div>
        </Form.Col>

        <Input.Email isRequired />
        <Form.Col xs={12}>
          <Link to="/auth/login">Voltar para o login</Link>
        </Form.Col>
        <Form.Footer>
          <Submit className="w-100">Recuperar minha senha</Submit>
        </Form.Footer>
      </Form>
      <Footer>
        <Brand src={logo} />
      </Footer>
    </Container>
  );
}

export default ForgotPassword;

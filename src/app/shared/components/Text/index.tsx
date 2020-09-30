import React from "react";
import { Container } from "./styles";

function Text({ value, ...props }) {
  return <Container {...props}>{value}</Container>;
}

export default Text;

import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  box-shadow: 1px 2px 2px var(--gray-100);
  border: 1px solid var(--gray-100);
  background: var(--white);
  padding: 50px 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
`;

export const Footer = styled.div`
  text-align: center;
  min-width: 100%;
  padding: 20px;
`;

export const Brand = styled.img`
  align-self: center;
  margin-top: 48px;
  width: 70px;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  margin-top: 20px;
  font-size: 14px;
  display: block;
`;

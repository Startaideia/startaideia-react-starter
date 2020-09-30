import styled from "styled-components";

const Button = styled.button`
  border: 1px solid var(--gray-100);
  background: var(--gray-50);
  border-radius: 20px;
  padding: 0px 20px;
  transition: 0.25s;
  outline: none;
  height: 40px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

export default Button;

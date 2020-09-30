import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--gray-200);
  background: var(--gray-50);
  color: var(--gray-300);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 40px;
`;

export const Input = styled.input`
  background: transparent;
  display: inline-block;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 18px;
  display: flex;
  height: 40px;
  width: 40px;
`;

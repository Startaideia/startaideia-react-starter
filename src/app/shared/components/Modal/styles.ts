import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  justify-content: center;
  align-items: center;
  position: absolute;
  visibility: hidden;
  transition: 0.5s;
  display: flex;
  height: 100vh;
  width: 100%;
  opacity: 0;
  right: 0px;
  top: 0px;

  &.is-visible {
    visibility: visible;
    opacity: 1;
  }
`;

export const Card: any = styled.div`
  box-shadow: 1px 2px 2px var(--gray-100);
  border: 1px solid var(--gray-100);
  background: var(--white);
  border-radius: 10px;
  visibility: hidden;
  margin-top: 150px;
  max-width: 800px;
  transition: 0.5s;
  width: 100%;
  opacity: 0;

  &.is-visible {
    visibility: visible;
    margin-top: 0px;
    opacity: 1;
  }
`;

Card.Header = styled.div`
  text-align: right;
  width: 100%;
`;

export const Close = styled.button`
  border-color: transparent;
  background: transparent;
  color: var(--gray-500);
  font-size: 24px;
  padding: 10px;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`;

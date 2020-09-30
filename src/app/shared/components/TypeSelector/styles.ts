import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 10px;
`;

export const Card = styled.div`
  box-shadow: 1px 2px 2px var(--gray-100);
  border: 1px solid var(--gray-100);
  justify-content: center;
  color: var(--gray-500);
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 32px;
  height: 100px;
  display: flex;
  width: 100px;

  &.small {
    height: 50px;
    width: 50px;
  }

  &:hover {
    cursor: pointer;
  }

  &.actived {
    border: 1px solid var(--pink-500);
    color: var(--pink-500);
  }
`;

export const Span = styled.div`
  text-align: center;
  display: block;

  &.small {
    font-size: 12px;
  }

  &.actived {
    color: var(--pink-500);
  }
`;

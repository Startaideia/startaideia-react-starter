import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 1px 2px 2px var(--gray-100);
  justify-content: flex-end;
  background: var(--white);
  display: flex;
  height: 50px;
  width: 100%;
`;

export const Nav: any = styled.ul`
  color: var(--gray-500);
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;
`;

Nav.Item = styled.li`
  align-items: center;
  padding: 0px 10px;
  display: flex;
  height: 50px;

  &:hover {
    color: var(--gray-700);
    cursor: pointer;
  }
`;

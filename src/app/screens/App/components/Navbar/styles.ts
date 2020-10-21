import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 1px 2px 2px var(--gray-100);
  justify-content: space-between;
  padding: 0px 15px;
  display: flex;
  height: 60px;
  width: 100%;
`;

export const Aside = styled.div`
  align-items: center;
  max-width: 350px;
  display: flex;
  flex-grow: 1;
`;

export const Brand = styled.img`
  height: 40px;
  width: 40px;
`;

export const Tabs: any = styled.ul`
  list-style: none;
  display: flex;
  flex-grow: 1;
  padding: 0;
  margin: 0;
`;

Tabs.Tab = styled.li`
  border-top: 2px solid transparent;
  color: var(--gray-600);
  align-items: center;
  padding: 0px 25px;
  transition: 0.25s;
  font-size: 28px;
  display: flex;

  &:hover {
    color: var(--pink-400);
    cursor: pointer;
  }
`;

export const Group: any = styled.ul`
  justify-content: flex-end;
  align-items: center;
  max-width: 350px;
  list-style: none;
  display: flex;
  flex-grow: 1;
  padding: 0;
  margin: 0;
`;

Group.Item = styled.li`
  border-top: 2px solid transparent;
  background: var(--gray-50);
  justify-content: center;
  color: var(--gray-900);
  align-items: center;
  border-radius: 50%;
  transition: 0.25s;
  font-size: 20px;
  margin: 0px 5px;
  display: flex;
  height: 40px;
  width: 40px;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

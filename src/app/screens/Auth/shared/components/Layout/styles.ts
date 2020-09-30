import styled from "styled-components";

export const Container: any = styled.div`
  background: url(${({ bgRight }: any) => bgRight}) right bottom no-repeat,
    url(${({ bgLeft }: any) => bgLeft}) left bottom no-repeat;
  justify-content: center;
  background-size: 600px;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
`;

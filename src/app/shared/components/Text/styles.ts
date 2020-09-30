import styled from "styled-components";

export const Container = styled.span`
  font-size: ${({ size = 12 }: any) => size}px;
  font-weight: ${({ weight = 400 }: any) => weight};
  display: ${({ display = "inline-block" }: any) => display};
  text-align: ${({ align = "left" }: any) => align};
  color: var(${({ color = "--gray-700" }: any) => color});
`;

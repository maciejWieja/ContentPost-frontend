import { styled } from 'styled-components';

export const Label = styled.label`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 600;
`;

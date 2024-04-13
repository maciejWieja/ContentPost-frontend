import { styled } from 'styled-components';

export const Input = styled.input`
  outline: none;
  resize: none;
  height: ${({ height }) => height};
  ${({ $isError, theme }) => ($isError ? `box-shadow: -2px 4px 10px ${theme.colors.error}50` : theme.shadow)};
  background-color: ${({ theme }) => theme.colors.dimWhite};
  border: 1px solid ${({ theme, $isError }) => ($isError ? theme.colors.error : theme.colors.gainsBoro)};
  border-radius: ${({ $bRadius }) => $bRadius};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey};
  padding: ${({ $padding }) => $padding};
  transition:
    box-shadow 0.2s ease-in-out,
    border 0.2s ease-in-out;
`;

import { styled } from 'styled-components';

export const Button = styled.button`
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.lightGainsBoro};
  margin: ${({ isCentered }) => (isCentered ? 'auto' : '0')};
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  margin: ${({ $isCentered }) => ($isCentered ? 'auto' : '0')};
  cursor: pointer;
`;

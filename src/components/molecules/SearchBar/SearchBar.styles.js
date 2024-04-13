import { styled } from 'styled-components';

export const StyledInput = styled.input`
  outline: none;
  grid-column: 2;
  grid-row: 1;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.dimWhite};
  border: 1px solid ${({ theme }) => theme.colors.gainsBoro};
  padding: 0 50px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.lightGrey};

  ${({ theme }) => theme.mq.phone} {
    width: 100%;
    padding: 0 25px;
  }

  &::placeholder {
    opacity: 1;
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

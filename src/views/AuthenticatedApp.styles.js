import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 200px 2fr 1fr;
  grid-template-rows: 91px 1fr;
  grid-gap: 15px;

  ${({ theme }) => theme.mq.phone} {
    grid-template-columns: 65px 1fr;
    grid-template-rows: 55px 1fr;
  }

  & > * {
    ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.colors.dimWhite};
    border: 1px solid ${({ theme }) => theme.colors.gainsBoro};
  }
`;

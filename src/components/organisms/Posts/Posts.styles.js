import { styled } from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 2;
  grid-row: 2;
  border-radius: 80px 80px 0 0;
  padding: 60px 60px 0;
  overflow: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.mq.phone} {
    grid-column: 1 / 3;
    padding: 25px 25px 0;
    border-radius: 30px 30px 0 0;
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
  }
`;

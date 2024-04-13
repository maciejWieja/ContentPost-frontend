import { styled } from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize._5xl};
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 700;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

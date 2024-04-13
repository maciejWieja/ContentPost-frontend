import styled from 'styled-components';

export const StyledMask = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    cursor: ${({ $withoutCursorPointer }) => ($withoutCursorPointer ? 'auto' : 'pointer')};
  }

  img {
    ${({ theme }) => theme.skeletonAnimation}
    height: inherit;
    width: inherit;
    font-size: 0;
  }
`;

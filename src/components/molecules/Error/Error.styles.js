import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 420px;
  height: 115px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.error};
  border: 3px solid ${({ theme }) => theme.colors.error};
  border-radius: 10px;
  padding: 25px;
  transition: transform 1.5s ease-in-out;
  overflow: scroll;

  ${({ theme }) => theme.mq.phone} {
    width: 265px;
    height: unset;
    max-height: 90px;
    padding: 15px 15px 20px;
  }

  h3 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    margin: 0 0 10px;

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }

  p {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 0;

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

import { styled } from 'styled-components';
import { Button } from '../components/atoms/Button/Button';
import { Title } from '../components/atoms/Title/Title';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    position: absolute;
    width: 200px;
    top: 0;
    left: 0;
    ${({ theme }) => theme.mq.phone} {
      left: unset;
      margin: auto;
      z-index: 2;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const StyledSignIn = styled.div`
  width: 660px;
  height: 566px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.dimWhite};
  border: 1px solid ${({ theme }) => theme.colors.gainsBoro};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.shadow};

  ${({ theme }) => theme.mq.phone} {
    width: 100vw;
    height: 100vh;
    padding-top: 150px;
  }

  ${Title} {
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 65px;
`;

export const StyledToggleButton = styled(Button)`
  position: absolute;
  bottom: 77px;
  right: -113px;
  transform: rotate(-90deg);
  z-index: 10;
  overflow: hidden;

  ${({ theme }) => theme.mq.phone} {
    display: none;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 15px;
    top: 15px;
  }
`;

export const StyledSignUp = styled(StyledSignIn)`
  position: absolute;
`;

export const StyledMobileToggleButton = styled.button`
  margin-top: 20px;
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

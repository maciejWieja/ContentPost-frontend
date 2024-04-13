import { styled } from 'styled-components';

export const Wrapper = styled.nav`
  position: relative;
  grid-column: 1;
  grid-row: 1 / 3;
  border-radius: 100px;

  ${({ theme }) => theme.mq.phone} {
    z-index: 1;
    width: 200px;
    height: 100vh;
    border-radius: 0;
    border-bottom-right-radius: 100px;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 1.2s ease;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;

  li {
    position: relative;

    button {
      cursor: pointer;
      margin-left: 80px;
      background: transparent;
      border: none;
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.m};
      color: ${({ theme }) => theme.colors.lightGrey};
    }

    img {
      position: absolute;
      left: 24px;
      top: 2px;
    }
  }
`;

export const StyledLogo = styled.img`
  margin-bottom: 92px;
`;

export const StyledProfilePicture = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
`;

export const StyledMobileToggleButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: -65px;
  width: 50px;
  height: 34px;
  background-color: transparent;
  border: 0;
  padding: 0;

  ${({ theme }) => theme.mq.phone} {
    display: block;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    position: absolute;
    border-radius: 10px;

    &:nth-child(1) {
      top: 0;
      transform: ${({ $isOpen }) => ($isOpen ? 'translateY(15px) rotate(-45deg)' : 'translateY(0) rotate(0)')};
      transition: transform 1.2s ease;
    }

    &:nth-child(2) {
      right: 0;
      transform: translateY(-50%);
      width: ${({ $isOpen }) => ($isOpen ? '0' : '100%')};
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
      transition:
        width 1.2s ease,
        opacity 1.2s ease;
    }

    &:nth-child(3) {
      bottom: 0;
      transform: ${({ $isOpen }) => ($isOpen ? 'translateY(-15px) rotate(45deg)' : 'translateY(0) rotate(0)')};
      transition: transform 1.2s ease;
    }
  }
`;

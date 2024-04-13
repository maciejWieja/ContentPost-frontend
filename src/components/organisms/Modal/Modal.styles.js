import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.steelGreyBlueAlpha};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const StyledModal = styled.div`
  pointer-events: auto;
  position: relative;
  width: 660px;
  background-color: ${({ theme }) => theme.colors.dimWhite};
  border-radius: 10px;

  ${({ theme }) => theme.mq.phone} {
    width: 270px;
  }
`;

export const StyledCloseIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1;

  ${({ theme }) => theme.mq.phone} {
    width: 20px;
    top: 15px;
    right: 15px;
  }
`;

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGainsBoro};
  border-radius: 10px;
  ${({ theme }) => theme.shadow};
  padding: 20px;
  padding-bottom: 0;
  position: relative;
  margin-bottom: 20px;
`;

export const StyledInfo = styled.div`
  display: flex;
`;

export const StyledNameDate = styled.div`
  margin: 7px 0 0 14px;
  color: ${({ theme }) => theme.colors.grey};

  ${({ theme }) => theme.mq.phone} {
    margin: 3px 0 0 10px;
  }
`;

export const StyledName = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledDate = styled.div`
  margin-top: 3px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledIconWrapper = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  gap: 10px;

  ${({ theme }) => theme.mq.phone} {
    gap: 15px;
  }

  img {
    cursor: pointer;

    ${({ theme }) => theme.mq.phone} {
      width: 17px;
    }
  }
`;

export const StyledContent = styled.div`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: 500;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  img {
    /* width: 218px;
    max-width: 100%; */
  }
`;

export const StyledLine = styled.div`
  width: 60%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey};
  margin: 15px auto;
`;

export const StyledIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 5px;

  ${({ theme }) => theme.mq.phone} {
    gap: 15px;
  }
`;

export const StyledCommentBtn = styled.img`
  position: relative;
  bottom: 6px;
  cursor: pointer;

  ${({ theme }) => theme.mq.phone} {
    width: 30px;
    bottom: 4px;
  }
`;

export const StyledThumbsUp = styled.div`
  position: relative;
  cursor: pointer;

  img {
    ${({ theme }) => theme.mq.phone} {
      width: 34px;
    }
  }

  label {
    position: absolute;
    pointer-events: none;
    left: 50%;
    top: 53%;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.gainsBoro};
    font-size: ${({ $stringLength, theme }) => {
      switch ($stringLength) {
        case 1:
          return theme.fontSize._4xl;
        case 2:
          return theme.fontSize.xxxl;
        case 3:
          return theme.fontSize.xl;
        case 4:
          return theme.fontSize.l;
        default:
          return '0px';
      }
    }};
    transform: translateY(-50%)
      ${({ $stringLength }) => {
        switch ($stringLength) {
          case 1:
            return;
          case 2:
            return 'translateX(-18%)';
          case 3:
            return 'translateX(-18%)';
          case 4:
            return 'translateX(-23%)';
          default:
            return;
        }
      }};
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ $stringLength, theme }) => {
        switch ($stringLength) {
          case 1:
            return theme.fontSize.xl;
          case 2:
            return theme.fontSize.m;
          case 3:
            return theme.fontSize.s;
          case 4:
            return theme.fontSize.xs;
          default:
            return '0px';
        }
      }};
      transform: translateY(-55%)
        ${({ $stringLength }) => {
          switch ($stringLength) {
            case 1:
              return;
            case 2:
              return 'translateX(-18%)';
            case 3:
              return 'translateX(-18%)';
            case 4:
              return 'translateX(-23%)';
            default:
              return;
          }
        }};
    }
  }
`;

export const StyledCommentsWrapper = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows ${({ $countAnimationDuration }) => `${$countAnimationDuration()}s`} ease-in-out;

  & > div {
    overflow: hidden;
  }
`;

export const StyledCommentForm = styled.form`
  position: relative;
  height: 35px;
  width: 234px;
  margin-left: 17px;
  margin-bottom: ${({ $commentsLength }) => ($commentsLength === 0 ? '20px' : '0px')};

  ${({ theme }) => theme.mq.phone} {
    width: 145px;
    height: 25px;
    margin-left: 10px;
  }

  input {
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.colors.paleSilver};
    height: 35px;
    width: 234px;
    border-radius: 25px;
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 500;
    padding: 0 54px 0 20px;

    &::placeholder {
      opacity: 1;
    }

    ${({ theme }) => theme.mq.phone} {
      width: 145px;
      height: 25px;
      padding: 0 45px 0 10px;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const StyledCommentButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 4px;
  cursor: ${({ disabled }) => (disabled ? 'unset' : 'pointer')};

  ${({ theme }) => theme.mq.phone} {
    right: 8px;
  }

  img {
    ${({ theme }) => theme.mq.phone} {
      width: 15px;
    }
  }
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  max-height: 150px;
  width: 218px;
  overflow: hidden;

  ${({ theme }) => theme.mq.phone} {
    width: 180px;
  }

  img {
    max-width: 218px;

    ${({ theme }) => theme.mq.phone} {
      max-width: 180px;
    }
  }
`;

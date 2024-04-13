import styled from 'styled-components';
import { StyledDate, StyledName, StyledNameDate } from '../Post/Post.styles';

export const StyledComment = styled.div`
  background-color: ${({ theme }) => theme.colors.gainsBoro};
  padding: 15px;
  ${({ theme }) => theme.shadow};
  margin: 15px 0 0 17px;
  width: 195px;

  &:last-of-type {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.mq.phone} {
    margin: 15px 0 0 10px;
    width: 177px;
    padding: 10px;
  }
`;

export const StyledCommentInfo = styled.div`
  display: flex;

  ${StyledNameDate} {
    margin: 6px 0 0 12px;

    ${({ theme }) => theme.mq.phone} {
      margin: 2px 0 0 5px;
    }
  }

  ${StyledName} {
    font-size: ${({ theme }) => theme.fontSize.m};

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }

  ${StyledDate} {
    margin-top: 2px;
    font-size: ${({ theme }) => theme.fontSize.xs};

    ${({ theme }) => theme.mq.phone} {
      margin-top: 0;
      font-size: ${({ theme }) => theme.fontSize.xxs};
    }
  }
`;

export const StyledCommentContent = styled.div`
  margin-top: 7px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.grey};
  word-wrap: break-word;
`;

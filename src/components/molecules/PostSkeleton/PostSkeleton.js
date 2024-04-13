import styled from 'styled-components';
import { StyledInfo, StyledNameDate, Wrapper } from '../Post/Post.styles';

const SkeletonWrapper = styled(Wrapper)`
  padding-bottom: 40px;

  ${({ theme }) => theme.mq.phone} {
    padding-bottom: 30px;
  }
`;

const StyledProfilePicture = styled.div`
  ${({ theme }) => theme.skeletonAnimation};
  width: 60px;
  height: 60px;
  border-radius: 50%;

  ${({ theme }) => theme.mq.phone} {
    width: 45px;
    height: 45px;
  }
`;

const StyledName = styled.div`
  ${({ theme }) => theme.skeletonAnimation};
  width: 111px;
  height: 11px;
  margin-top: 3px;
  border-radius: 10px;

  ${({ theme }) => theme.mq.phone} {
    width: 95px;
    height: 9px;
    margin-top: 5px;
  }
`;

const StyledDate = styled.div`
  ${({ theme }) => theme.skeletonAnimation};
  width: 39px;
  height: 9px;
  margin-top: 10px;
  border-radius: 10px;

  ${({ theme }) => theme.mq.phone} {
    width: 31px;
    height: 8px;
    margin-top: 8px;
  }
`;

const StyledContent = styled.div`
  ${({ theme }) => theme.skeletonAnimation};
  width: 85%;
  height: 15px;
  margin-top: 15px;
  border-radius: 10px;

  ${({ theme }) => theme.mq.phone} {
    height: 12px;
  }
`;

const PostSkeleton = () => {
  return (
    <SkeletonWrapper>
      <StyledInfo>
        <StyledProfilePicture />
        <StyledNameDate>
          <StyledName />
          <StyledDate />
        </StyledNameDate>
      </StyledInfo>
      <StyledContent />
      <StyledContent />
      <StyledContent />
    </SkeletonWrapper>
  );
};

export default PostSkeleton;

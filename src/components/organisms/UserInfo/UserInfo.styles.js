import { styled } from 'styled-components';
import { Title } from '../../atoms/Title/Title';

export const Wrapper = styled.div`
  grid-column: 3;
  grid-row: 1 / 3;
  border-radius: 80px 0 0;
  overflow: hidden;
  position: relative;
  overflow: auto;
  scrollbar-width: none;

  ${({ theme }) => theme.mq.phone} {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  ${Title} {
    margin: 85px 0 15px 25px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
    margin: 0 0 30px 25px;
  }
`;

export const StyledBackgroundImage = styled.div`
  ${({ theme }) => theme.skeletonAnimation};
  width: 100%;
  height: 296px;
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  background-position: center;
`;

export const StyledProfilePictureContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.dimWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 20px;
  transform: translateY(-50%);
`;

export const StyledBio = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  max-width: 400px;
  margin-left: 25px;
`;

export const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gainsBoro};
  margin: 5px 0 14px;
`;

export const StyledInfo = styled.div`
  margin: 0 0 25px 25px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey};

  img {
    margin-right: 22px;
  }
`;

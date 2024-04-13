import ProfilePicture from '../../atoms/ProfilePicture/ProfilePicture';
import { Title } from '../../atoms/Title/Title';
import phoneIcon from '../../../assets/icons/phone.svg';
import locationIcon from '../../../assets/icons/location.svg';
import workIcon from '../../../assets/icons/work.svg';
import schoolIcon from '../../../assets/icons/school.svg';
import { StyledBackgroundImage, StyledBio, StyledInfo, StyledLine, StyledProfilePictureContainer, Wrapper } from './UserInfo.styles';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPicture } from '../../../helpers/getPicture';
import defaultBackgroundImage from '../../../assets/icons/defaultBackgroundImage.png';

const UserInfo = () => {
  const user = useSelector((state) => state.currentUser);
  const [backgroundImageState, setBackgroundImageState] = useState(null);

  useEffect(() => {
    (async () => {
      const backgroundImage = await getPicture(user._id, 'BACKGROUND');
      setBackgroundImageState(backgroundImage);
    })();
  }, [user]);

  let infoKeys;

  if (user.info) {
    infoKeys = Object.keys(user.info);
  }

  const icons = [phoneIcon, locationIcon, locationIcon, workIcon, schoolIcon];

  const checkIsAnyUserInfo = () => {
    if (user.info) {
      const values = Object.values(user.info);
      for (let i = 0; i < values.length; i++) {
        if (values[i]) return true;
      }
    }
    return false;
  };

  return (
    <Wrapper>
      <StyledBackgroundImage $image={backgroundImageState === 'default' ? defaultBackgroundImage : backgroundImageState} />
      <StyledProfilePictureContainer>
        <ProfilePicture size="140px" userId={user._id} withoutCursorPointer />
      </StyledProfilePictureContainer>
      <Title>{user.username}</Title>
      <StyledBio>{user.bio}</StyledBio>
      {checkIsAnyUserInfo() ? (
        <>
          <StyledLine />
          <h2>User Info</h2>
          {infoKeys.map((infoKey, index) =>
            user.info[infoKey] ? (
              <StyledInfo key={infoKey}>
                <img src={icons[index]} alt="icon representing user info" />
                {user.info[infoKey]}
              </StyledInfo>
            ) : null,
          )}
        </>
      ) : null}
    </Wrapper>
  );
};

export default UserInfo;

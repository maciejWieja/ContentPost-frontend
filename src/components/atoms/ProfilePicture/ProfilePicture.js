import { useEffect, useState } from 'react';
import { StyledMask } from './ProfilePicture.styles';
import PropTypes from 'prop-types';
import { getPicture } from '../../../helpers/getPicture';
import defaultProfilePicture from '../../../assets/icons/defaultProfileImage.png';

const ProfilePicture = ({ size, userId, onClick, withoutCursorPointer }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const imageData = await getPicture(userId, 'PROFILE');
      setImage(imageData);
    })();
  });

  return (
    <StyledMask size={size} onClick={onClick} $withoutCursorPointer={withoutCursorPointer}>
      <img src={image === 'default' ? defaultProfilePicture : image} alt="profile picture" />
    </StyledMask>
  );
};

ProfilePicture.propTypes = {
  size: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  withoutCursorPointer: PropTypes.bool,
};

export default ProfilePicture;

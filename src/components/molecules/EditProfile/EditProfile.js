import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';
import FormField from '../FormField/FormFIeld';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getPicture } from '../../../helpers/getPicture';
import { useForm } from 'react-hook-form';
import {
  StyledBackgroundImageWrapper,
  StyledImageInputsWrapper,
  StyledInputsWrapper,
  StyledInputsWrapperPart,
  StyledProfilePictureMask,
  Wrapper,
} from './EditProfile.styles';
import { useUserDetails } from '../../../hooks/useUserDetails';
import { changeOpenState, setCurrentUser, setUser } from '../../../store';
import imageCompression from 'browser-image-compression';
import defaultProfilePicture from '../../../assets/icons/defaultProfileImage.png';
import defaultaBackgroundImage from '../../../assets/icons/defaultBackgroundImage.png';

const EditProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const { _id } = useSelector((state) => state.user);
  const profilePictureInputRef = useRef();
  const backgroundImageInputRef = useRef();
  const { updateUserDetails } = useUserDetails();
  const {
    username,
    bio,
    info: { phoneNumber, city, country, school, workplace },
  } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: username,
      bio,
      phoneNumber,
      city,
      country,
      school,
      workplace,
    },
  });
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });

    return () => {
      window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
      });
    };
  });

  useEffect(() => {
    (async () => {
      const profilePictureData = await getPicture(_id, 'PROFILE');
      setProfilePicture(profilePictureData);
      const backgroundImageData = await getPicture(_id, 'BACKGROUND');
      setBackgroundImage(backgroundImageData);
    })();
  }, []);

  const handleChangeImage = async (e, type) => {
    const file = e.target.files[0];

    if (['image/jpeg', 'image/bmp', 'image/png', 'image/tiff', 'image/raw'].includes(file.type)) {
      const reader = new FileReader();

      reader.onloadend = () => {
        type === 'PROFILE' ? setProfilePicture(reader.result) : setBackgroundImage(reader.result);
      };

      if (file.size / 1024 / 1024 > 4) {
        const compressedImage = await imageCompression(file, {
          maxSizeMB: 4,
          useWebWorker: false,
        });
        reader.readAsDataURL(compressedImage);
      } else {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleEditProfile = async (data) => {
    const { name, bio, phoneNumber, city, country, school, workplace } = data;

    const newProfile = {
      username: name,
      profilePicture: profilePicture === 'default' ? 'default' : profilePicture.split(',', 2)[1],
      backgroundImage: backgroundImage === 'default' ? 'default' : backgroundImage.split(',', 2)[1],
      bio,
      info: {
        phoneNumber,
        city,
        country,
        school,
        workplace,
      },
    };
    const updatedUser = await updateUserDetails(_id, newProfile);
    dispatch(setUser(updatedUser));
    dispatch(setCurrentUser(updatedUser));
    dispatch(changeOpenState(false));
  };

  return (
    <Wrapper onSubmit={handleSubmit(handleEditProfile)}>
      <Title>Edit profile</Title>
      <StyledInputsWrapper>
        <StyledImageInputsWrapper>
          <FormField
            type="file"
            width="100%"
            label="Profile picture"
            name="profilePicture"
            id="profilePicture"
            ref={profilePictureInputRef}
            labelFontSize={isMobile ? '14px' : '16px'}
            onChange={(e) => handleChangeImage(e, 'PROFILE')}
            accept=".jpg, .bmp, .png, .tiff, .raw"
          />
          <StyledProfilePictureMask>
            <img
              src={profilePicture === 'default' ? defaultProfilePicture : profilePicture}
              onClick={() => profilePictureInputRef.current.click()}
              alt="profile picture"
            />
          </StyledProfilePictureMask>
          <FormField
            type="file"
            width="100%"
            label="Background image"
            name="backgroundImage"
            id="backgroundImage"
            ref={backgroundImageInputRef}
            labelFontSize={isMobile ? '14px' : '16px'}
            onChange={(e) => handleChangeImage(e, 'BACKGROUND')}
            accept=".jpg, .bmp, .png, .tiff, .raw"
          />
          <StyledBackgroundImageWrapper>
            <img
              src={backgroundImage === 'default' ? defaultaBackgroundImage : backgroundImage}
              onClick={() => backgroundImageInputRef.current.click()}
              alt="background image"
            />
          </StyledBackgroundImageWrapper>
        </StyledImageInputsWrapper>
        <StyledInputsWrapperPart>
          <FormField
            label="Name"
            name="name"
            id="name"
            labelFontSize={isMobile ? '14px' : '16px'}
            {...register('name', { required: true, pattern: /^[a-zA-Z0-9_ -]{3,16}$/ })}
            isError={!!errors.name}
          />
          <FormField
            height="60px"
            padding="10px 15px"
            isTextarea
            bRadius="15px"
            label="Bio"
            name="bio"
            id="bio"
            labelFontSize={isMobile ? '14px' : '16px'}
            {...register('bio', { maxLength: 60 })}
            isError={!!errors.bio}
          />
          <FormField
            label="Phone number"
            name="phoneNumber"
            id="phoneNumber"
            labelFontSize={isMobile ? '14px' : '16px'}
            {...register('phoneNumber', { pattern: /^\d{9}$/ })}
            isError={!!errors.phoneNumber}
          />
        </StyledInputsWrapperPart>
        <StyledInputsWrapperPart>
          <FormField
            label="Country"
            name="country"
            id="country"
            labelFontSize={isMobile ? '14px' : '16px'}
            {...register('country', { maxLength: 30 })}
            isError={!!errors.country}
          />
          <FormField
            label="City"
            name="city"
            id="city"
            labelFontSize={isMobile ? '14px' : '16px'}
            {...register('city', { maxLength: 30 })}
            isError={!!errors.city}
          />
          <FormField
            label="Workplace"
            name="workplace"
            labelFontSize={isMobile ? '14px' : '16px'}
            id="workplace"
            {...register('workplace', { maxLength: 30 })}
            isError={!!errors.workplace}
          />
          <FormField
            label="School"
            name="school"
            labelFontSize={isMobile ? '14px' : '16px'}
            id="school"
            {...register('school', { maxLength: 30 })}
            isError={!!errors.school}
          />
        </StyledInputsWrapperPart>
      </StyledInputsWrapper>
      <Button>Update</Button>
    </Wrapper>
  );
};

export default EditProfile;

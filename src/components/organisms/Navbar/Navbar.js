import logo from '../../../assets/icons/logo.svg';
import arrow from '../../../assets/icons/arrow.svg';
import { StyledList, StyledLogo, StyledMobileToggleButton, StyledProfilePicture, Wrapper } from './Navbar.styles';
import ProfilePicture from '../../atoms/ProfilePicture/ProfilePicture';
import { useAuth } from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenState, changePostToEdit, changeTask, setUser } from '../../../store';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const { signOut } = useAuth();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut();
    dispatch(setUser(null));
    dispatch(changePostToEdit({ _id: '', content: '', image: null }));
    dispatch(changeOpenState(false));
  };

  const openAddPostModal = () => {
    dispatch(changePostToEdit({ _id: '', content: '', image: null }));
    dispatch(changeTask('addPost'));
    dispatch(changeOpenState(true));
  };

  const openEditProfileModal = () => {
    dispatch(changeTask('editProfile'));
    dispatch(changeOpenState(true));
  };

  return (
    <Wrapper $isOpen={isOpen}>
      <StyledMobileToggleButton onClick={() => setIsOpen((prevState) => !prevState)} $isOpen={isOpen}>
        <div />
        <div />
        <div />
      </StyledMobileToggleButton>
      <StyledLogo src={logo} alt="logo" />
      <StyledList>
        <li>
          <img src={arrow} alt="arrow" />
          <button onClick={openAddPostModal}>Write</button>
        </li>
        <li>
          <img src={arrow} alt="arrow" />
          <button onClick={handleSignOut}>Signout</button>
        </li>
      </StyledList>
      <StyledProfilePicture onClick={openEditProfileModal}>
        <ProfilePicture size="150px" userId={user._id} />
      </StyledProfilePicture>
    </Wrapper>
  );
};

export default Navbar;

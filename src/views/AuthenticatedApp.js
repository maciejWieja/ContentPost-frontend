import SearchBar from '../components/molecules/SearchBar/SearchBar';
import Modal from '../components/organisms/Modal/Modal';
import Navbar from '../components/organisms/Navbar/Navbar';
import Posts from '../components/organisms/Posts/Posts';
import UserInfo from '../components/organisms/UserInfo/UserInfo';
import { Wrapper } from './AuthenticatedApp.styles';

const AuthenticatedApp = () => {
  return (
    <Wrapper>
      <Navbar />
      <SearchBar />
      <Posts />
      <UserInfo />
      <Modal />
    </Wrapper>
  );
};

export default AuthenticatedApp;

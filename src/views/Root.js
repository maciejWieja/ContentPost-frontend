import { useEffect } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { setUser, setCurrentUser } from '../store';
import Error from '../components/molecules/Error/Error';
import { Wrapper } from './Root.styles';

const Root = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { signIn } = useAuth();
  const error = useSelector((state) => state.error);

  useEffect(() => {
    (async () => {
      const user = await signIn();
      dispatch(setUser(user));
      dispatch(setCurrentUser(user));
    })();
  }, []);

  return (
    <Wrapper>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      {error ? <Error /> : null}
    </Wrapper>
  );
};

export default Root;

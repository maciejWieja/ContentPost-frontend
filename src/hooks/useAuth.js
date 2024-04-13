import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setError } from '../store';

export const useAuth = () => {
  const dispatch = useDispatch();

  const signUp = async (userData) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}signup`;
      await axios.post(URL, userData);
      return signIn(userData);
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const signIn = async (userData) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}signin`;
      const res = await axios.post(URL, userData, { withCredentials: true });
      return res.data.user;
    } catch (err) {
      if (err.response.data.message) {
        dispatch(setError(err.response.data.message));
      } else {
        dispatch(setError(err.message));
      }
    }
  };

  const signOut = async () => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}signout`;
      await axios.get(URL, { withCredentials: true });
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  return { signUp, signIn, signOut };
};

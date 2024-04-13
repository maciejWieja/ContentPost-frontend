import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setError } from '../store';

export const useUserDetails = () => {
  const dispatch = useDispatch();

  const getUserById = async (userId) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}user?userId=${userId}`;
      const res = await axios.get(URL);
      return res.data.user;
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const updateUserDetails = async (userId, updates) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}updateUser`;
      const res = await axios.patch(URL, { userId, updates }, { withCredentials: true });
      return res.data.user;
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  return { getUserById, updateUserDetails };
};

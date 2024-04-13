import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setError } from '../store';

export const usePosts = () => {
  const dispatch = useDispatch();

  const addNewPost = async (post) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}post`;
      const res = await axios.post(URL, post, { withCredentials: true });
      return res.data.post;
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const getPostsFrom = async (start, query = '') => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}posts?start=${start}&query=${query}`;
      const res = await axios.get(URL);
      return res.data.posts;
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const removePost = async (postId) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}post?postId=${postId}`;
      await axios.delete(URL, { withCredentials: true });
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const editPost = async (postId, content, photo) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}updatePost`;
      const res = await axios.patch(
        URL,
        {
          postId,
          content,
          photo,
        },
        { withCredentials: true },
      );
      return res.data.post;
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const addComment = async (comment, postId) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}comment`;
      const res = await axios.post(URL, { comment, postId }, { withCredentials: true });
      return res.data.addedComment;
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const addLike = async (userId, postId) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}like`;
      await axios.post(URL, { userId, postId }, { withCredentials: true });
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  const removeLike = async (userId, postId) => {
    try {
      const URL = `${import.meta.env.VITE_BACKEND_URL}unlike?userId=${userId}&postId=${postId}`;
      await axios.delete(URL, { withCredentials: true });
    } catch (err) {
      dispatch(setError(err.response.data.message));
    }
  };

  return { addNewPost, getPostsFrom, removePost, editPost, addComment, addLike, removeLike };
};

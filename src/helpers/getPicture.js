import axios from 'axios';

export const getPicture = async (userId, type) => {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}image?userId=${userId}&image=${type}`);
  return res.data.image === 'default' ? 'default' : `data:image/png;base64,${res.data.image}`;
};

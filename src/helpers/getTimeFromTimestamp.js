export const getTimeFromTimestamp = (timestamp) => {
  const diff = Date.now() - timestamp;
  const seconds = Math.floor(diff / 1000);

  if (seconds >= 604800) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
  if (seconds >= 86400) {
    const days = Math.floor(seconds / 60 / 60 / 24);
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  }
  if (seconds >= 3600) {
    const hours = Math.floor(seconds / 60 / 60);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  }
  if (seconds >= 60) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  }
  if (seconds === 0) {
    return 'now';
  }
  return `${seconds} seconds ago`;
};

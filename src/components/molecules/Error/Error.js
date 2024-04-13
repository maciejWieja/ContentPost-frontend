import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from './Error.styles';

const Error = () => {
  const error = useSelector((state) => state.error);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = window.innerWidth <= 768 ? 'translate(-50%, -40px)' : 'translate(-50%, -90px)';
      }
    }, 0);
    setTimeout(() => {
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = 'translate(-50%, 100%)';
      }
    }, 3500);
  }, [error]);

  return (
    <Wrapper ref={wrapperRef}>
      <h3>Oops!</h3>
      <p>{error}</p>
    </Wrapper>
  );
};

export default Error;

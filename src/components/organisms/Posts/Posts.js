import { useEffect, useRef, useState } from 'react';
import Post from '../../molecules/Post/Post';
import { Wrapper } from './Posts.styles';
import { usePosts } from '../../../hooks/usePosts';
import { useDispatch, useSelector } from 'react-redux';
import { addNextPosts } from '../../../store';
import PostSkeleton from '../../molecules/PostSkeleton/PostSkeleton';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const { getPostsFrom } = usePosts();
  const postsQuery = useSelector((state) => state.postsQuery);
  const [postsAreLoaded, setPostsAreLoaded] = useState(false);
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

  const checkPagination = async (e) => {
    if (e.target.lastChild.getBoundingClientRect().top < window.innerHeight) {
      wrapperRef.current.removeEventListener('scroll', checkPagination);
      await addPostsToState(posts.length + 1);
    }
  };

  const addPostsToState = async (start = 1) => {
    setPostsAreLoaded(true);
    const newPosts = await getPostsFrom(start, postsQuery);
    setPostsAreLoaded(false);
    dispatch(addNextPosts(newPosts));
  };

  useEffect(() => {
    addPostsToState();
  }, []);

  useEffect(() => {
    wrapperRef.current.addEventListener('scroll', checkPagination);
    return () => wrapperRef.current?.removeEventListener('scroll', checkPagination);
  }, [posts]);

  return (
    <Wrapper ref={wrapperRef}>
      {posts.map((post) => (
        <Post post={post} isMobile={isMobile} key={post._id} />
      ))}
      {postsAreLoaded ? (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      ) : null}
      {posts.length === 0 && !postsAreLoaded ? <h2>No posts found.</h2> : null}
    </Wrapper>
  );
};

export default Posts;

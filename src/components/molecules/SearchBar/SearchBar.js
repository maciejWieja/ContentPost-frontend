import { StyledInput } from './SearchBar.styles';
import debounce from 'lodash.debounce';
import { usePosts } from '../../../hooks/usePosts';
import { useDispatch, useSelector } from 'react-redux';
import { replaceAllPosts, setPostIsAddedEdited, setPostsQuery } from '../../../store';
import { useEffect, useRef } from 'react';

const SearchBar = () => {
  const { getPostsFrom } = usePosts();
  const dispatch = useDispatch();
  const postIsAddedEdited = useSelector((state) => state.postIsAddedEdited);
  const inputRef = useRef(null);

  useEffect(() => {
    if (postIsAddedEdited) {
      inputRef.current.value = '';
      handleQueryChange(inputRef.current);
      dispatch(setPostIsAddedEdited(false));
    }
  }, [postIsAddedEdited]);

  const handleQueryChange = debounce(async (target) => {
    dispatch(setPostsQuery(target.value));
    const posts = await getPostsFrom(1, target.value);
    dispatch(replaceAllPosts(posts));
  }, 500);

  return (
    <StyledInput
      aria-label="Find post"
      type="text"
      placeholder="Find post"
      onChange={(e) => handleQueryChange(e.target)}
      ref={inputRef}
    ></StyledInput>
  );
};

export default SearchBar;

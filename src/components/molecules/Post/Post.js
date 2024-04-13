import PropTypes from 'prop-types';
import ProfilePicture from '../../atoms/ProfilePicture/ProfilePicture';
import { getTimeFromTimestamp } from '../../../helpers/getTimeFromTimestamp';
import pencil from '../../../assets/icons/pencil.svg';
import closeBtn from '../../../assets/icons/dark-close.svg';
import lightThumbsUp from '../../../assets/icons/light-thumbs-up.svg';
import darkThumbsUp from '../../../assets/icons/dark-thumbs-up.svg';
import lightComment from '../../../assets/icons/light-comment.svg';
import darkComment from '../../../assets/icons/dark-comment.svg';
import darkEnterBtn from '../../../assets/icons/dark-enter.svg';
import lightEnterBtn from '../../../assets/icons/light-enter.svg';
import { getStringOfLikesAmount } from '../../../helpers/getStringOfLikesAmount';
import { useEffect, useRef, useState } from 'react';
import {
  StyledCommentBtn,
  StyledCommentButton,
  StyledCommentForm,
  StyledCommentsWrapper,
  StyledContent,
  StyledDate,
  StyledIconWrapper,
  StyledIconsWrapper,
  StyledImageWrapper,
  StyledInfo,
  StyledLine,
  StyledName,
  StyledNameDate,
  StyledThumbsUp,
  Wrapper,
} from './Post.styles';
import { useUserDetails } from '../../../hooks/useUserDetails';
import Comment from '../Comment/Comment';
import { usePosts } from '../../../hooks/usePosts';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewCommentToState,
  removePostFromState,
  addLikeToState,
  removeLikeFromState,
  changePostToEdit,
  changeTask,
  changeOpenState,
  setCurrentUser,
} from '../../../store';
import PostSkeleton from '../PostSkeleton/PostSkeleton';

const Post = ({ post, isMobile }) => {
  const [isCommentsSectionOpen, setIsCommentsSectionOpen] = useState(false);
  const [commentInputValue, setCommentInputValue] = useState('');
  const commentsRef = useRef(null);
  const { getUserById } = useUserDetails();
  const [author, setAuthor] = useState(null);
  const { removePost, addComment, addLike, removeLike } = usePosts();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setAuthor(await getUserById(post.author_id));
    })();
  }, []);

  const countAnimationDuration = () => {
    if (post.comments.length === 0) return 0.5;
    return post.comments.length * 0.5 >= 1.5 ? 1.5 : post.comments.length * 0.5;
  };

  const toggleCommentsSection = () => {
    setIsCommentsSectionOpen((prev) => !prev);
    commentsRef.current.style.gridTemplateRows = isCommentsSectionOpen ? '0fr' : `1fr`;
  };

  const handleRemovePost = () => {
    if (user._id === post.author_id) {
      removePost(post._id);
      dispatch(removePostFromState(post._id));
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const comment = {
      author_id: user._id,
      timestamp: Date.now(),
      content: commentInputValue,
    };
    setCommentInputValue('');
    const addedComment = await addComment(comment, post._id);
    if (addedComment) {
      dispatch(addNewCommentToState({ newComment: addedComment, postId: post._id }));
    }
  };

  const checkLikesIncludesUser = () => post.likes.includes(user._id);

  const toggleLike = () => {
    const userId = user._id;
    const postId = post._id;
    if (checkLikesIncludesUser()) {
      removeLike(userId, postId);
      dispatch(removeLikeFromState({ userId, postId }));
    } else {
      addLike(userId, postId);
      dispatch(addLikeToState({ userId, postId }));
    }
  };

  const openEditPostModal = () => {
    dispatch(changePostToEdit({ id: post._id, content: post.content, image: post.photo }));
    dispatch(changeTask('editPost'));
    dispatch(changeOpenState(true));
  };

  if (!author) return <PostSkeleton />;

  return (
    <Wrapper>
      {user._id === post.author_id ? (
        <StyledIconWrapper>
          <img src={pencil} alt="pencil icon" onClick={openEditPostModal} />
          <img src={closeBtn} alt="delete post icon" onClick={handleRemovePost} />
        </StyledIconWrapper>
      ) : null}
      <StyledInfo>
        <ProfilePicture
          size={isMobile ? '45px' : '60px'}
          userId={author._id}
          onClick={async () => dispatch(setCurrentUser(await getUserById(post.author_id)))}
        />
        <StyledNameDate>
          <StyledName>{user._id === post.author_id ? 'You' : author.username}</StyledName>
          <StyledDate>{getTimeFromTimestamp(post.timestamp)}</StyledDate>
        </StyledNameDate>
      </StyledInfo>
      <StyledContent>
        {post.content}
        {post.photo ? (
          <StyledImageWrapper>
            <img src={`data:image/png;base64,${post.photo}`} alt="post photo" />
          </StyledImageWrapper>
        ) : null}
      </StyledContent>
      <StyledLine />
      <StyledIconsWrapper>
        <StyledThumbsUp $stringLength={getStringOfLikesAmount(post.likes.length).length} onClick={toggleLike}>
          <img src={checkLikesIncludesUser() ? darkThumbsUp : lightThumbsUp} alt="thumbs up" />
          <label>{getStringOfLikesAmount(post.likes.length)}</label>
        </StyledThumbsUp>
        <StyledCommentBtn src={isCommentsSectionOpen ? darkComment : lightComment} alt="comment icon" onClick={toggleCommentsSection} />
      </StyledIconsWrapper>
      <StyledCommentsWrapper $countAnimationDuration={countAnimationDuration} ref={commentsRef}>
        <div>
          <StyledCommentForm onSubmit={handleAddComment} $commentsLength={post.comments.length}>
            <input placeholder="Leave a comment" value={commentInputValue} onChange={(e) => setCommentInputValue(e.target.value)} />
            <StyledCommentButton disabled={commentInputValue.length < 2 || commentInputValue.length > 140}>
              <img src={commentInputValue.length < 2 || commentInputValue.length > 140 ? lightEnterBtn : darkEnterBtn} alt="enter comment icon" />
            </StyledCommentButton>
          </StyledCommentForm>
          {post.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} isMobile={isMobile} />
          ))}
        </div>
      </StyledCommentsWrapper>
    </Wrapper>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  isMobile: PropTypes.bool,
};

export default Post;

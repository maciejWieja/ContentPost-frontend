import PropTypes from 'prop-types';
import { getTimeFromTimestamp } from '../../../helpers/getTimeFromTimestamp';
import ProfilePicture from '../../atoms/ProfilePicture/ProfilePicture';
import { StyledDate, StyledName, StyledNameDate } from '../Post/Post.styles';
import { StyledComment, StyledCommentContent, StyledCommentInfo } from './Comment.styles';
import { useEffect, useState } from 'react';
import { useUserDetails } from '../../../hooks/useUserDetails';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../store';

const Comment = ({ comment, isMobile }) => {
  const [author, setAuthor] = useState(null);
  const { getUserById } = useUserDetails();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setAuthor(await getUserById(comment.author_id));
    })();
  }, []);

  if (!author) return <h3>Loading...</h3>;

  return (
    <StyledComment>
      <StyledCommentInfo>
        <ProfilePicture size={isMobile ? '25px' : '45px'} userId={author._id} onClick={() => dispatch(setCurrentUser(author))} />
        <StyledNameDate>
          <StyledName>{author.username}</StyledName>
          <StyledDate>{getTimeFromTimestamp(comment.timestamp)}</StyledDate>
        </StyledNameDate>
      </StyledCommentInfo>
      <StyledCommentContent>{comment.content}</StyledCommentContent>
    </StyledComment>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
  isMobile: PropTypes.bool,
};

export default Comment;

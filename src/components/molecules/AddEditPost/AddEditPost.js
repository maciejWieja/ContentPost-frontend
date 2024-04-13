import { Title } from '../../atoms/Title/Title';
import FormField from '../FormField/FormFIeld';
import ImageIcon from '../../../assets/icons/image.svg';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import { StyledAddImage, StyledImageInputWrapper, StyledSelectedImageWrapper, Wrapper } from './AddEditPost.styles';
import PropTypes from 'prop-types';
import { usePosts } from '../../../hooks/usePosts';
import { useDispatch, useSelector } from 'react-redux';
import imageCompression from 'browser-image-compression';
import { addNewPostToState, changeOpenState, editPostInState, setPostIsAddedEdited } from '../../../store';

const AddEditPost = ({ task, postToEdit = { id: '', content: '', image: null } }) => {
  const [selectedImage, setSelectegImage] = useState(null);
  const [content, setContent] = useState('');
  const [isInputError, setIsInputError] = useState(false);
  const inputRef = useRef();
  const { addNewPost, editPost } = usePosts();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
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

  useEffect(() => {
    setSelectegImage(postToEdit.image);
    setContent(postToEdit.content);
  }, [task === 'editPost' ? postToEdit : task]);

  const handleClickIcon = () => {
    inputRef.current.click();
  };

  const handleAddImage = async (e) => {
    const file = e.target.files[0];

    if (['image/jpeg', 'image/bmp', 'image/png', 'image/tiff', 'image/raw'].includes(file.type)) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const image = reader.result.split(',', 2)[1];
        setSelectegImage(image);
      };

      if (file.size / 1024 / 1024 > 4) {
        const compressedImage = await imageCompression(file, {
          maxSizeMB: 4,
          useWebWorker: false,
        });
        reader.readAsDataURL(compressedImage);
      } else {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAddPost = async () => {
    if (content.length < 2 || content.length > 280) {
      setIsInputError(true);
    } else {
      const newPost = await addNewPost({ photo: selectedImage, content, authorId: user?._id });
      if (newPost) {
        dispatch(addNewPostToState(newPost));
      }
      dispatch(changeOpenState(false));
      dispatch(setPostIsAddedEdited(true));
    }
  };

  const handleEditPost = async () => {
    if (content.length < 2 || content.length > 280) {
      setIsInputError(true);
    } else {
      const updatedPost = await editPost(postToEdit.id, content, selectedImage);
      dispatch(editPostInState(updatedPost));
      dispatch(changeOpenState(false));
      dispatch(setPostIsAddedEdited(true));
    }
  };

  return (
    <Wrapper>
      <Title>{task === 'addPost' ? 'Write new post' : 'Edit post'}</Title>
      <FormField
        isTextarea
        width="100%"
        height={isMobile ? '106px' : '194px'}
        fontSize={isMobile ? '12px' : '16px'}
        labelFontSize={isMobile ? '14px' : '16px'}
        padding="15px"
        bRadius={isMobile ? '15px' : '25px'}
        label="Content"
        name="content"
        id="content"
        minLength="2"
        maxLength="280"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        isError={isInputError ? content.length < 2 || content.length > 280 : isInputError}
      />
      <StyledImageInputWrapper>
        <input type="file" ref={inputRef} onChange={handleAddImage} accept=".jpg, .bmp, .png, .tiff, .raw" />
        <StyledAddImage onClick={handleClickIcon}>
          <img src={ImageIcon} alt="image icon" />
        </StyledAddImage>
        {selectedImage ? (
          <StyledSelectedImageWrapper>
            <img src={`data:image/png;base64,${selectedImage}`} onClick={() => setSelectegImage(null)} alt="post photo" />
          </StyledSelectedImageWrapper>
        ) : null}
      </StyledImageInputWrapper>
      <Button onClick={task === 'addPost' ? handleAddPost : handleEditPost}>Upload</Button>
    </Wrapper>
  );
};

AddEditPost.propTypes = {
  task: PropTypes.string.isRequired,
  postToEdit: PropTypes.object,
};

export default AddEditPost;

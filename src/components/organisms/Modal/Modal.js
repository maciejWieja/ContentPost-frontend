import { createPortal } from 'react-dom';
import { StyledCloseIcon, StyledModal, StyledModalWrapper } from './Modal.styles';
import lightCloseIcon from '../../../assets/icons/light-close.svg';
import AddEditPost from '../../molecules/AddEditPost/AddEditPost';
import { useDispatch, useSelector } from 'react-redux';
import { changeOpenState } from '../../../store';
import EditProfile from '../../molecules/EditProfile/EditProfile';

const Modal = () => {
  const modalRoot = document.getElementById('modal-root');
  const { isOpen, task, postToEdit } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const getModalContent = () => {
    switch (task) {
      case 'addPost':
        return <AddEditPost task={task} />;
      case 'editPost':
        return <AddEditPost task={task} postToEdit={postToEdit} />;
      case 'editProfile':
        return <EditProfile />;
    }
  };

  return modalRoot && isOpen
    ? createPortal(
        <StyledModalWrapper>
          <StyledModal>
            <StyledCloseIcon src={lightCloseIcon} onClick={() => dispatch(changeOpenState(false))} alt="modal close icon" />
            {getModalContent()}
          </StyledModal>
        </StyledModalWrapper>,
        modalRoot,
      )
    : null;
};

export default Modal;

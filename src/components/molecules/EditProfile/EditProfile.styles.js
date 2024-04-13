import styled from 'styled-components';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';
import { Wrapper as FormFieldWrapper } from '../FormField/FormFIeld';

export const Wrapper = styled.form`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px;

  ${({ theme }) => theme.mq.phone} {
    padding: 20px 35px;
  }

  ${Title} {
    text-align: center;
    margin: 0 0 40px;

    ${({ theme }) => theme.mq.phone} {
      margin: 0 0 30px;
    }
  }

  ${Button} {
    margin: auto;
  }
`;

export const StyledInputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;

  ${({ theme }) => theme.mq.phone} {
    display: block;
    max-height: 215px;
    overflow-y: scroll;
    margin: 0px -10px 15px;
    padding: 0px 10px;
  }
`;

export const StyledImageInputsWrapper = styled.div`
  input {
    display: none;
  }

  label {
    margin-bottom: 10px;
  }
`;

export const StyledProfilePictureMask = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 30px;
  cursor: pointer;

  ${({ theme }) => theme.mq.phone} {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }

  img {
    ${({ theme }) => theme.skeletonAnimation}
    height: inherit;
    width: inherit;
    font-size: 0;
  }
`;

export const StyledBackgroundImageWrapper = styled.div`
  max-width: 170px;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ theme }) => theme.mq.phone} {
    max-width: 120px;
    margin-bottom: 20px;
  }

  img {
    height: 90px;
    font-size: 0;

    ${({ theme }) => theme.mq.phone} {
      height: 45px;
    }
  }
`;

export const StyledInputsWrapperPart = styled.div`
  ${FormFieldWrapper} {
    margin-bottom: 20px;
  }

  ${FormFieldWrapper}:last-child {
    margin-bottom: 50px;

    ${({ theme }) => theme.mq.phone} {
      margin-bottom: 15px;
    }
  }
`;

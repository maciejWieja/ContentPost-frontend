import styled from 'styled-components';
import { Title } from '../../atoms/Title/Title';
import { Button } from '../../atoms/Button/Button';
import { Wrapper as FromFieldWrapper } from '../FormField/FormFIeld';

export const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 40px 80px;

  ${({ theme }) => theme.mq.phone} {
    padding: 20px 35px;
  }

  ${Title} {
    text-align: center;
    margin: 0 0 30px;
  }

  ${FromFieldWrapper} {
    margin-bottom: 25px;
  }

  ${Button} {
    margin: auto;
  }
`;

export const StyledImageInputWrapper = styled.div`
  margin-bottom: 40px;

  ${({ theme }) => theme.mq.phone} {
    margin-bottom: 25px;
  }

  input {
    display: none;
  }
`;

export const StyledAddImage = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    ${({ theme }) => theme.mq.phone} {
      width: 48px;
    }
  }
`;

export const StyledSelectedImageWrapper = styled.div`
  max-width: 300px;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;

  ${({ theme }) => theme.mq.phone} {
    max-width: 120px;
  }

  img {
    cursor: pointer;
    height: 70px;
    transition: opacity 0.1s linear;

    ${({ theme }) => theme.mq.phone} {
      height: 48px;
    }
  }

  img:hover {
    opacity: 0.7;
  }
`;

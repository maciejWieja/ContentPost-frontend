import logo from '../assets/icons/logo.svg';
import { Title } from '../components/atoms/Title/Title';
import FormField from '../components/molecules/FormField/FormFIeld';
import { Button } from '../components/atoms/Button/Button';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { StyledInputWrapper, StyledMobileToggleButton, StyledSignIn, StyledSignUp, StyledToggleButton, Wrapper } from './UnAuthenticatedApp.styles';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth';
import { setCurrentUser, setUser } from '../store';
import { useDispatch } from 'react-redux';

const UnauthenticatedApp = () => {
  const [activeForm, setActiveForm] = useState('signIn');
  const {
    register: signUpRegister,
    handleSubmit: signUpHanleSubmit,
    formState: { errors: signUpErrors },
  } = useForm();
  const {
    register: signInRegister,
    handleSubmit: signInHanleSubmit,
    formState: { errors: signInErrors },
  } = useForm();
  const signInRef = useRef(null);
  const signUpRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const toggleButtonTextRef = useRef(null);
  const { signUp, signIn } = useAuth();
  const dispatch = useDispatch();
  const tl = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

  const toggleForm = () => {
    setActiveForm((prev) => (prev === 'signIn' ? 'signUp' : 'signIn'));

    const form = activeForm === 'signIn' ? signInRef.current : signUpRef.current;
    const toggleButton = toggleButtonRef.current;
    const toggleButtonText = toggleButtonTextRef.current;

    tl.set(toggleButton, { pointerEvents: 'none' })
      .addLabel('moveLeft')
      .to(form, { duration: 0.8, x: -800 })
      .to(toggleButton, { duration: 0.8, y: activeForm === 'signIn' ? -376 : 0 }, 'moveLeft')
      .to(toggleButtonText, { duration: 0.8, y: activeForm === 'signIn' ? -32 : 0 }, 'moveLeft')
      .set(form, { zIndex: -1 })
      .set(activeForm === 'signIn' ? signUpRef.current : signInRef.current, { zIndex: 1 })
      .addLabel('moveRight')
      .to(form, { duration: 0.8, x: 0 })
      .to(toggleButton, { duration: 0.8, x: 0 }, 'moveRight')
      .set(toggleButton, { pointerEvents: 'auto' });
  };

  const handleSignUp = async (data) => {
    const user = await signUp(data);
    dispatch(setUser(user));
    dispatch(setCurrentUser(user));
  };

  const handleSignIn = async (data) => {
    const user = await signIn(data);
    dispatch(setUser(user));
    dispatch(setCurrentUser(user));
  };

  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <div>
        <StyledSignUp ref={signUpRef}>
          <Title>Sign up</Title>
          <form onSubmit={signUpHanleSubmit(handleSignUp)}>
            <StyledInputWrapper>
              <FormField
                label="Username"
                name="username"
                id="signUpUsername"
                width="324px"
                {...signUpRegister('username', { required: true, pattern: /^[a-zA-Z0-9_ -]{3,16}$/ })}
                isError={!!signUpErrors.username}
              />
              <FormField
                label="E-mail"
                name="email"
                id="signUpEmail"
                width="324px"
                {...signUpRegister('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                isError={!!signUpErrors.email}
              />
              <FormField
                label="Password"
                name="password"
                id="signUpPassword"
                width="324px"
                type="password"
                {...signUpRegister('password', { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ })}
                isError={!!signUpErrors.password}
              />
            </StyledInputWrapper>
            <Button $isCentered>Sign up</Button>
          </form>
          <StyledMobileToggleButton onClick={toggleForm}>Click here to sign in</StyledMobileToggleButton>
        </StyledSignUp>
        <StyledSignIn ref={signInRef}>
          <Title>Sign in</Title>
          <form onSubmit={signInHanleSubmit(handleSignIn)}>
            <StyledInputWrapper>
              <FormField
                label="Username"
                name="username"
                id="signInUsername"
                width="324px"
                {...signInRegister('username', { required: true, pattern: /^[a-zA-Z0-9_ -]{3,16}$/ })}
                isError={!!signInErrors.username}
              />
              <FormField
                label="Password"
                name="password"
                id="SignInPassword"
                width="324px"
                type="password"
                {...signInRegister('password', { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/ })}
                isError={!!signInErrors.password}
              />
            </StyledInputWrapper>
            <Button $isCentered>Sign in</Button>
          </form>
          <StyledMobileToggleButton onClick={toggleForm}>Click here to sign up</StyledMobileToggleButton>
        </StyledSignIn>
        <StyledToggleButton onClick={toggleForm} ref={toggleButtonRef}>
          <div ref={toggleButtonTextRef}>
            <span>Click to sign up</span>
            <span>Click to sign in</span>
          </div>
        </StyledToggleButton>
      </div>
    </Wrapper>
  );
};

export default UnauthenticatedApp;

import { css, keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  from {
    background-color: #D9D9D9;
  }
  to {
    background-color: #BBBCBC;
  }
`;

export const theme = {
  colors: {
    white: '#FFFFFF',
    lightGrey: '#BBBCBC',
    grey: '#8C8C8C',
    gainsBoro: '#DFE2E8',
    darkSlateGrey: '#374957',
    dimWhite: '#F7F8FA',
    lightBlue: '#7FA1C0',
    lightGainsBoro: '#EBEBEB',
    steelGreyBlueAlpha: '#737C8E80',
    lightGreyBlue: '#C0C7D6',
    lightLightGrey: '#ECEFF7',
    paleSilver: '#D9D9D9',
    error: '#FF8383',
  },
  fontSize: {
    xxs: '6px',
    xs: '8px',
    s: '10px',
    m: '12px',
    l: '14px',
    xl: '16px',
    xxl: '20px',
    xxxl: '24px',
    _4xl: '32px',
    _5xl: '40px',
  },
  shadow: 'box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.25)',
  skeletonAnimation: css`
    background-color: #d9d9d9;
    animation: ${skeletonAnimation} 1.2s infinite alternate linear;
  `,
  mq: {
    phone: '@media (max-width: 767px)',
    tablet: '@media (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media (min-width: 1024px) and (max-width: 1279px)',
    bigDesktop: '@media (min-width: 1280px)',
    huge: '@media(min-width: 1440px)',
  },
};

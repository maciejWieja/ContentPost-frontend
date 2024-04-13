import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../assets/styles/globalStyle';
import { Provider } from 'react-redux';
import { store } from '../store';

const AppProviders = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </ThemeProvider>
  </Provider>
);

AppProviders.propTypes = {
  children: PropTypes.element,
};

export default AppProviders;

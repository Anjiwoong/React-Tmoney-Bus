import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import GlobalStyle from './style/global';
import { AuthContextProvider } from './store/auth-context';
import { Provider } from 'react-redux';
import store from './store';
import { DateContextProvider } from './store/date-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <AuthContextProvider>
      <DateContextProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
          <GlobalStyle />
        </BrowserRouter>
      </DateContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
);

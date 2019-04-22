import React from 'react';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '/utils/ErrorBoundary';
import LightTheme from '/utils/styles/LightTheme';
import GlobalStyle from '/utils/styles/GlobalStyle';
import Router from '/utils/Router';

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={LightTheme}>
        <React.Fragment>
          <GlobalStyle />
          <Router />
        </React.Fragment>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

import React from 'react';

import ErrorBoundary from '/utils/ErrorBoundary';
import Router from '/utils/Router';

export default function App() {
  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

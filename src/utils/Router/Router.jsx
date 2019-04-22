// @flow
import React, { Suspense, lazy } from 'react';
import type { Node } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ErrorBoundary from '/utils/ErrorBoundary';
import Error404 from '/screens/Error404';

const Home = lazy(() => import('/screens/Home'));
const Contact = lazy(() => import('/screens/Contact'));

export default function Router(): Node {
  return (
    <BrowserRouter>
      <ErrorBoundary renderPage={(): Node => <Error404 />}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Error404 />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('/screens/Home'));
const Contact = lazy(() => import('/screens/Contact'));
const Error404 = lazy(() => import('/screens/Error404'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Error404 />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

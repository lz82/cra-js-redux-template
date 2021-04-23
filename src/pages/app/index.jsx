import PrivateRoute from '@/components/private-route';
import { LayoutBlank, LayoutMain } from '@/layout';
import { RouterBlank, RouterMain } from '@/router';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import css from './index.module.less';

const App = () => {
  const renderRouter = (router, routeProps) => {
    if (!router.child && !router.component) {
      // 微应用的场景
      return;
    }
    return router.child ? (
      router.child.map((item) => renderRouter(item, routeProps))
    ) : (
      <PrivateRoute
        exact={!!router.exact}
        key={router.path}
        path={router.path}
        {...routeProps}
        render={(props) => <router.component {...props} />}
      />
    );
  };

  return (
    <div className={css['app']}>
      <Router>
        <Switch>
          <Route
            path="/admin"
            render={(routeProps) => (
              <LayoutMain {...routeProps}>
                <Switch>
                  {RouterMain.map((router, index) => renderRouter(router, routeProps))}
                  <Redirect to="/admin/dashboard" from="/admin" exact />
                  <Redirect to="/404" />
                </Switch>
              </LayoutMain>
            )}
          />
          <Route
            path="/"
            render={(routeProps) => (
              <LayoutBlank {...routeProps}>
                <Switch>
                  {RouterBlank.map((router) => {
                    return router.child && router.child.length > 0 ? (
                      router.child.map((item) => (
                        <Route exact={!!item.exact} key={item.path} path={item.path} component={item.component} />
                      ))
                    ) : (
                      <Route exact={!!router.exact} key={router.path} path={router.path} component={router.component} />
                    );
                  })}
                  <Redirect exact to="/login" from="/" />
                  <Redirect to="/404" />
                </Switch>
              </LayoutBlank>
            )}
          />
          {/* <Redirect to="/404" /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;

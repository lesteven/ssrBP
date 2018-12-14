import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorPage from './ErrorPage';

function MappedRoutes({ routes }) {
  return (
    <Switch>
      { routes.map(e => 
      <Route exact = { e.exact } path = { `${e.prefix}${e.path}` } 
          component = { e.component } key = { e.path} />
      ) }
      <Route component = { ErrorPage } /> 
    </Switch>
  )
}

export default MappedRoutes;

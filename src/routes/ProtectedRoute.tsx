import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export type ProtectedRouteProps = {
  children: React.ReactNode;
} & RouteProps;

const ProtectedRoute = ({ children, ...rest }: ProtectedRouteProps ) =>{
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
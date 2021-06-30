import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'

import AppRoutes from './app'
import loginPage from '../components/05_pages/loginPage';

const MainRoutes: React.FunctionComponent = (props) => {
    const {match, location} = props as any
    if (location.pathname === '/'  || location.pathname==='/app'|| location.pathname==='/app/') {
        return (<Redirect to='/app/tsa' />);
    }
    return(
        <Switch>
            <ProtectedRoute path={`${match.url}app`} >
                <AppRoutes />
            </ProtectedRoute>
            <Route path='/login' component={loginPage} />
        </Switch>
    )
}

export default MainRoutes
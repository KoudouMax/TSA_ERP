import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute'

import AppRoutes from './app'
import {LoginPage} from '../components/05_pages';

const MainRoutes: React.FC<any> = (props) => {
    const {match, location} = props
    if (location.pathname === '/'  || location.pathname==='/app'|| location.pathname==='/app/') {
        return (<Redirect to='/app/tsa' />);
    }
    return(
        <Switch>
            <ProtectedRoute path={`${match.url}app`} ><AppRoutes /></ProtectedRoute>
            <Route path='/login' component={LoginPage} />
        </Switch>
    )
}

export default MainRoutes
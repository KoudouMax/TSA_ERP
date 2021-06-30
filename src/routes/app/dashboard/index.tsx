import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {dashboardDefault} from '../../../components/05_pages'

const AppRoutes: React.FC<any> = (props) => {
    const {match, location} = props
    if (location.pathname === match.url  || location.pathname=== `${match.url}/`) {
        return (<Redirect to={`${match.url}/default`} />);
    }
    return(
        <Switch>
            <Route path={`${match.url}/default`} component={dashboardDefault} />
        </Switch>
    )
}

export default AppRoutes

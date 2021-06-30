import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './dashboard';

const AppRoutes: React.FunctionComponent = (props) => {
    return(
        <Switch>
            <Route path={`/app/tsa`} component={Dashboard}/>
        </Switch>
    )
}

export default AppRoutes

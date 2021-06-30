import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppLayout } from '../../components/04_templates';
import Dashboard from './dashboard';

const AppRoutes: React.FC<{}> = () => {
    return(
        <AppLayout>
            <Switch>
                <Route path={`/app/tsa`} component={Dashboard}/>
            </Switch>
        </AppLayout>
    )
}

export default AppRoutes

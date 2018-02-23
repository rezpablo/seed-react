import * as React from 'react';

import {Route, Switch} from 'react-router-dom';
import Home from './Home';

const Router = () => (
    <main className="layout-main">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
        </Switch>
    </main>
);

export default Router;
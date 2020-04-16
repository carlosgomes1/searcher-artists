import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Letter from './pages/Letter';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/letter" component={Letter} />
            </Switch>
        </BrowserRouter>
    );
}

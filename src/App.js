import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from "./routes";

const App = () => {
    return (
        <div>
            <Switch>
                {routes.map(route =>
                    <Route
                        key={route.pageId}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}/>)}
            </Switch>
        </div>
    );
};

export default App;
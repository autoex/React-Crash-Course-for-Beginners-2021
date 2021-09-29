import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import {Layout} from 'antd';
import 'antd/dist/antd.css'
import HeaderLayout from "./layout/Header";
import FooterLayout from "./layout/FooterLayout";
import {FavouritesContext} from "./context";

const App = () => {
    const {Content} = Layout;
    return (
        <FavouritesContext.Provider value={{a: 1}}>
            <Layout className="layout">
                <HeaderLayout/>
                <Content className='content'>
                    <Switch>
                        {routes.map(route =>
                            <Route
                                key={route.pageId}
                                path={route.path}
                                component={route.component}
                                exact={route.exact}/>)}
                    </Switch>
                </Content>
                <FooterLayout/>
            </Layout>
        </FavouritesContext.Provider>
    );
};

export default App;
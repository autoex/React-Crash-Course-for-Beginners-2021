import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import {Layout} from 'antd';
import NavMenu from "./components/NavMenu";




const App = () => {
    const {Header, Footer, Sider, Content} = Layout;

    return (
        <Layout>
            <Header justify='start'>
                <div className="logo" />
                <NavMenu/>
            </Header>
            <Content>
                <Switch>
                    {routes.map(route =>
                        <Route
                            key={route.pageId}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}/>)}
                </Switch>
            </Content>
            <Footer>
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default App;
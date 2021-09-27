import React from 'react';
import {Route, Switch} from "react-router-dom";
import {routes} from "./routes";
import {Layout} from 'antd';
import NavMenu from "./components/NavMenu";
import 'antd/dist/antd.css'




const App = () => {
    const {Header, Footer,  Content} = Layout;

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" >R MeetUps</div>
                <NavMenu/>
            </Header>
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
            <Footer>
                R MeetUps ©2k21 Created by Me
            </Footer>
        </Layout>
    );
};

export default App;
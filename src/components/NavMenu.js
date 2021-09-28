import React from 'react';
import {Menu} from "antd";
import {routes} from "../routes";
import {NavLink} from "react-router-dom";

const NavMenu = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {routes.map(route => <Menu.Item key={route.pageId}><NavLink to={route.path}>{route.pageName}</NavLink></Menu.Item>)}
        </Menu>
    );
};

export default NavMenu;
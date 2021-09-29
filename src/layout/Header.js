import React from 'react';
import NavMenu from "../components/NavMenu";
import {Layout} from 'antd';

const HeaderLayout = () => {
    const {Header} = Layout;
    return (
        <Header>
            <div className="logo" >R MeetUps</div>
            <NavMenu/>
        </Header>
    );
};

export default HeaderLayout;
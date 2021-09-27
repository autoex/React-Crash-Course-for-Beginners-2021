import React from 'react';
import {Card} from "antd";

const MeetUpItem = ({el}) => {
    const {Meta} = Card
    return (
        <Card key={el.id}
              hoverable
              style={{width: 640}}
              cover={<img alt="example" src={el.image}/>}
        >
            <Meta title={el.title} description={el.description}/>
        </Card>
    );
};

export default MeetUpItem;
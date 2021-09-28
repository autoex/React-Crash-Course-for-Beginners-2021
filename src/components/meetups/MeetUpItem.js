import React, {useState} from 'react';
import {Card} from "antd";
import { StarOutlined, StarFilled } from '@ant-design/icons';

const MeetUpItem = ({el}) => {
    const {Meta} = Card;
    const [favourite, setFavourite] = useState(false);
    return (
        <Card key={el.id}
              hoverable
              style={{width: 640}}
              cover={<img alt="example" src={el.image}/>}
              actions={[favourite ?<StarFilled onClick={()=>setFavourite(!favourite)} key='Remove from favourite'/>  : <StarOutlined onClick={()=>setFavourite(!favourite)} key='Add to favourite'/>]}
        >
            <Meta title={el.title} description={el.description}/>
        </Card>
    );
};

export default MeetUpItem;
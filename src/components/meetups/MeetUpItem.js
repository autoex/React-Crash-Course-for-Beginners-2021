import React from 'react';
import {Card} from "antd";
import {StarFilled, StarOutlined} from '@ant-design/icons';
import {firebaseApi} from "../../API";

const MeetUpItem = ({el, setFavIdUpdate, favIdUpdate}) => {
    const {Meta} = Card;
    const favourite = async (id, favStatus) => {
        await firebaseApi.favouriteToggle(id, favStatus)
        setFavIdUpdate(favIdUpdate+1)

    };
    return (
        <Card key={el.id}
              hoverable
              style={{width: 640}}
              cover={<img alt="example" src={el.image}/>}
              actions={[el.favourite ?<StarFilled onClick={()=>favourite(el.id, false)} key='Remove from favourite'/>  : <StarOutlined onClick={()=>favourite(el.id, true)} key='Add to favourite'/>]}
        >
            <Meta title={el.title} description={el.description}/>
        </Card>
    );
};

export default MeetUpItem;
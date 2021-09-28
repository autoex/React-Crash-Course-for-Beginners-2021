import React from 'react';
import MeetUpItem from "./MeetUpItem";

const MeetUpList = ({data}) => {

    return <div>
        {data.map(el => <MeetUpItem key={el.id} el={el}/>)}
    </div>

};

export default MeetUpList;
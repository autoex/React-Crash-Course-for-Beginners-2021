import React from 'react';
import MeetUpItem from "./MeetUpItem";

const MeetUpList = ({data, setFavIdUpdate, favIdUpdate}) =>  <div>{data.map(el => <MeetUpItem key={el.id} el={el} favIdUpdate={favIdUpdate} setFavIdUpdate={setFavIdUpdate}/>)}</div>;

export default MeetUpList;
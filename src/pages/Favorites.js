import React, {useEffect, useState} from 'react';
import MeetUpList from "../components/meetups/MeetUpList";
import {firebaseApi} from "../API";

const Favorites = () => {
    const [meets, setMeets] = useState([]);
    const fetchMeets = () => {
        firebaseApi.getMeets()
            .then(meetUps=>setMeets(meetUps.filter(m=> m.favourite === true)));

    };
    useEffect(() => {
        fetchMeets()
    }, []);

    return  <MeetUpList data={meets}/>

};

export default Favorites;
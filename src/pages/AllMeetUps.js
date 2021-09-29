import React, {useState, useEffect} from 'react';
import MeetUpList from "../components/meetups/MeetUpList";
import {firebaseApi} from "../API";


const AllMeetUps = () => {
    const [meets, setMeets] = useState([]);
    const fetchMeets = () => {
        firebaseApi.getMeets()
            .then(meetUps=>setMeets(meetUps))
    };
    useEffect(() => {
        fetchMeets()
    }, []);

    return  <MeetUpList data={meets}/>

};

export default AllMeetUps;
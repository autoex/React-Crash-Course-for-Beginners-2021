import React, {useState, useEffect, useContext} from 'react';
import MeetUpList from "../components/meetups/MeetUpList";
import {firebaseApi} from "../API";
import {FavouritesContext} from "../context";


const AllMeetUps = () => {
    const {meets, setMeets, favIdUpdate, setFavIdUpdate} = useContext(FavouritesContext);
    const fetchMeets = () => {
        firebaseApi.getMeets()
            .then(meetUps=>setMeets(meetUps))
    };


    useEffect(() => {
        fetchMeets()
    }, [favIdUpdate]);

    return  <MeetUpList data={meets} setFavIdUpdate={setFavIdUpdate} favIdUpdate={favIdUpdate}/>

};

export default AllMeetUps;
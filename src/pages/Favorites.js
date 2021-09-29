import React, {useContext, useEffect, useState} from 'react';
import MeetUpList from "../components/meetups/MeetUpList";
import {firebaseApi} from "../API";
import {FavouritesContext} from "../context";

const Favorites = () => {
    const {meets, setMeets, favIdUpdate, setFavIdUpdate} = useContext(FavouritesContext);
    const fetchMeets = () => {
        firebaseApi.getMeets()
            .then(meetUps=>setMeets(meetUps.filter(m=> m.favourite === true)));

    };
    useEffect(() => {
        fetchMeets()
    }, [favIdUpdate]);

    if(meets.length === 0) return <h1>Oops no meets yet</h1>

    return  <MeetUpList data={meets} setFavIdUpdate={setFavIdUpdate} favIdUpdate={favIdUpdate}/>

};

export default Favorites;




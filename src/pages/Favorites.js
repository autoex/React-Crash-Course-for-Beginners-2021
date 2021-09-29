import React, {useEffect, useState} from 'react';
import MeetUpList from "../components/meetups/MeetUpList";

const Favorites = () => {
    const [meets, setMeets] = useState([]);
    const fetchMeets = () => {
        fetch(`https://react-meetups-data-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`)
            .then(response => response.json())
            .then(json => {
                const meetUps = [];
                for (const key in json) {
                    const meetUp = {
                        id: key,
                        ...json[key]
                    };

                    meetUps.push(meetUp)
                }


                setMeets(meetUps.filter(m=> m.favourite === true))
            });
    };
    useEffect(() => {
        fetchMeets()
    }, []);

    return  <MeetUpList data={meets}/>

};

export default Favorites;
import React, {useState, useEffect} from 'react';
import MeetUpList from "../components/meetups/MeetUpList";


const AllMeetUps = () => {
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
                setMeets(meetUps)
            });
    };
    useEffect(() => {
        fetchMeets()
    }, []);

    return  <MeetUpList data={meets}/>

};

export default AllMeetUps;
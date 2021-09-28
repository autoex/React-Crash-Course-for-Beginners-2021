import React from 'react';
import FormMeetUp from "../components/FormMeetUp";
import {Card} from "antd";
import {useHistory} from 'react-router-dom'

const NewMeetUp = () => {
    const history = useHistory()
    const addNewMeetUp =(data)=> {
        fetch(`https://react-meetups-data-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`,
            {
                method : 'POST',
                body: JSON.stringify({id: Date.now(), ...data}),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then(()=>history.replace('/'))

    };
    return (
        <Card hoverable style={{width: 640}}>
            <FormMeetUp addNewMeetUp={addNewMeetUp}/>
        </Card>
    );
};

export default NewMeetUp;
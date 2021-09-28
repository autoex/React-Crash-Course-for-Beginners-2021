import React from 'react';
import FormMeetUp from "../components/FormMeetUp";
import {Card} from "antd";

const NewMeetUp = () => {
    const addNewMeetUp =(data)=> {
        fetch(`https://react-meetups-data-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`,
            {
                method : 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })

    };
    return (
        <Card hoverable style={{width: 640}}>
            <FormMeetUp addNewMeetUp={addNewMeetUp}/>
        </Card>
    );
};

export default NewMeetUp;
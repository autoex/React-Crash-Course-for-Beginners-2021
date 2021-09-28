import React from 'react';
import FormMeetUp from "../components/FormMeetUp";
import {Card} from "antd";

const NewMeetUp = () => {
    return (
        <Card hoverable style={{width: 640}}>
            <FormMeetUp/>
        </Card>
    );
};

export default NewMeetUp;
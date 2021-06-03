import ContentBlock from 'material-ui/svg-icons/content/block';
import React, { useState } from 'react';
import {emitter} from '../notification';

const AddAppointments = ({addScheduleList}) => {

    const addAppointmentStyle = {
        position: "fixed",
        bottom: 10,
        display: "block",
        width: "100%"
    }
    const currDatetime = new Date();

    const [custName,setName]=useState("Schedule appointment");
    const handleSubmit = (e)=>{
        e.preventDefault();
        const newScheduleList = { id: Math.random(), name: custName, dateTime: currDatetime.toDateString("MM/dd/yyyy hh:mm"), scheduled: false }
        addScheduleList(newScheduleList);
        emitter.emit("Notification","New Appointment")
        setName("");
    }

    return (<div style={addAppointmentStyle}>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder={custName} required style={{ width: "90%", padding: 10 }} 
              onChange = {(e)=>setName(e.target.value)} />
            <input type="submit" value="submit" style={{ width: 80, padding: 10 }} />
        </form>

    </div>)

}

export default AddAppointments;
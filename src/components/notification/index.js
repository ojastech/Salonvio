import React, { useState } from 'react'
import {EventEmitter} from 'fbemitter'

export const emitter = new EventEmitter();

const Notification = () => {

    const [open,setOpen]=useState(false)
    const [message,setMessage]=useState()

    const notificationStyle = {
        padding: 10,
        border: "1px green solid",
        marginBottom: 15,
        backgroundColor: "#55c555",
        borderRadius: 5
    }

    const reset=()=>{
        setOpen(false);
    }

    const autoHideTimer=()=>{
        setTimeout(()=> reset(), 5000)
    }

    emitter.addListener("Notification", (msg)=>{
        setMessage(msg);
        setOpen(true);
        autoHideTimer();
    })

    if(open)
    return <div style={notificationStyle} ><span>{message}</span> </div>

    return null;

}

export default Notification
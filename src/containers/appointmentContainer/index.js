import React from 'react';
import AppointmentList from '../../components/appointmentList';
import Notification from '../../components/notification';


const AppointmentContainer = () => {
    return (
        <div style={{ margin: 20 }} >
            {<Notification />}
            {<AppointmentList />}
        </div>
    )
}

export default AppointmentContainer
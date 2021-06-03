import React, { useState } from 'react';
import AddAppointments from '../addAppointment';
import './appointment.css';
import {emitter} from '../notification'


const scheduleList = [
    { id: 1, name: "Adam", dateTime: "02/06/2021 09:00", scheduled: true },
    { id: 2, name: "Jordan", dateTime: "02/06/2021 09:30", scheduled: false }
]

const AppointmentList = () => {

    const [schedules, setSchedules] = useState(scheduleList)

    const handleNewList = (newList) => {
        const newScheduleList = [...schedules, newList]
        setSchedules(newScheduleList);
    }

    const onClickRemoveSchedule = (id) => {
        const newScheduleList = schedules.filter(scheduleList => scheduleList.id !== id);
        setSchedules(newScheduleList);
    }

    const onChangeSchedule = (id) => {
        const newScheduleList = schedules.map(scheduleList => {
            if (scheduleList.id === id)
            {
                emitter.emit("Notification",`"${scheduleList.name}"'s appointment is accepted`)
                return { ...scheduleList, scheduled: !scheduleList.scheduled }  

            }
            return scheduleList;
        })
        setSchedules(newScheduleList);
    }

    return (
        <div align="center">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Accepted</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedules, i) => (
                        <tr>

                            <td>
                                <input disabled={schedules.scheduled} type="checkbox" style={{ margin: "0 10px" }}
                                    checked={schedules.scheduled}
                                    onChange={() => onChangeSchedule(schedules.id)}
                                />
                            </td>
                            <td>
                                {schedules.name}
                            </td>
                            <td>
                                {schedules.dateTime}
                            </td>
                            <td>
                                <span style={{
                                    position: "fixed",
                                    cursor: "pointer",
                                    fontWeight: 600,
                                }}
                                    onClick={() => { onClickRemoveSchedule(schedules.id) 
                                      emitter.emit("Notification",`"${schedules.name}"'s appointment is completed`)
                                    }} >

                                    X </span>
                            </td>


                        </tr>
                    ))}
                </tbody>

            </table>
            <AddAppointments addScheduleList={handleNewList} />
        </div>
    )
}

export default AppointmentList
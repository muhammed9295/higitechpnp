import React from 'react'
import Pcards from '../../components/cards/Pcards'
import './birdEyeView.css';

export default function BirdEyeView() {
    return (
        <div className='birdEyeView-container'>
            <h2>Telesales Performance</h2>  
            <div className="telesales-perfomance">
                
                <Pcards color="#0A73B4" icon='../../images/booking.png' details='Total Bookings'/>
                <Pcards color="#4599b9" icon='../../images/cancel.png' details='Total Cancellations'/>
                <Pcards color="#848A8D" icon='../../images/clock.png' details='Total Hours Booked'/>
                <Pcards color="#3D4347" icon='../../images/money.png' details='Total Revenue'/>
            </div>
            <h2>Operations Performance</h2>
            <div className="operations-performance">
                
                <Pcards color="#59944D" icon='../../images/appointment.png' details='Total Jobs Scheduled'/>
                <Pcards color="#2C5129" icon='../../images/danger.png' details='Total Un-assigned Jobs'/>
                <Pcards color="#D79839" icon='../../images/clock.png' details='Total Hours Assigned'/>
                <Pcards color="#CE7136" icon='../../images/money.png' details='Total Revenue'/>
            </div>
            <h2>Finance Performance</h2>
            <div className="finance-performance">
                
                <Pcards color="#848A8D" icon='../../images/paid.png' details='Total Jobs Paid'/>
                <Pcards color="#D79839" icon='../../images/revenue.png' details='Total Revenue'/>
                <Pcards color="#3D4347" icon='../../images/recieved.png' details='Total Received Amount'/>
                <Pcards color="#0A73B4" icon='../../images/money.png' details='Total Outstanding Amount'/>
            </div>
        </div>
    )
}

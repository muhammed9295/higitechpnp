import React from 'react';
import './topbar.css';
import { NotificationsNone, AccountCircle } from '@mui/icons-material';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbar-wrapper">
                <div className="topLeft">
                    <span className='logo'><img src="./images/higi-icon.png" alt="logo" /></span>
                </div>
                <div className="topRight">

                    <div className="topRight-icons">
                    <AccountCircle />
                    </div>
                    
                    <div className="topRight-icons">
                    <NotificationsNone />
                    <span className='topIcon-badge'>2</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar

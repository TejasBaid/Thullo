import React from 'react'
import './ProfileDropdown.scss'
import {FaSortDown} from "react-icons/fa/index";

export const ProfileDropdown = () => {
    return(
        <div className="profile-dropdown">
            {/* TODO: (Component) User Profile Overview */}
            <div className="user-avatar">
                XN
            </div>
            <div className="user-name">Xanthe Neal</div>
            <FaSortDown className="dropdown-button pointer" />
        </div>
    )
}
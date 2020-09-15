import React from 'react'
import './Header.scss'
import {FaTh} from 'react-icons/fa'
import logo from '../../Assets/logo.svg'
import {Searchbar} from "./Searchbar/Searchbar";
import {ProfileDropdown} from "./ProfileDropdown/ProfileDropdown";

export const Header = () => {
    return(
        <div className="header-container">
            {/* Desktop Header */}
            <div className="header">
                {/* Logo */}
                <img className={"header-logo"} src={logo} alt={"logo"}/>

                <div className="header-boards-section">
                    {/* Board Name */}
                    <p className="header-board-name">DevChallenges Board</p>
                    <div className="bar"> </div>

                    {/* All Boards button */}
                    <div className="all-boards-button">
                        <FaTh className='boards-icon' />
                        <p className="all-boards">All Boards</p>

                    </div>

                </div>

                {/* Searchbar */}
                <Searchbar />

                {/* Profile Dropdown */}
                <ProfileDropdown />

            </div>

            {/* Mobile Header */}
            <div className="mobile-header">
                <div className="mobile-header-top">
                    {/* Logo */}
                    <img className={"header-logo"} src={logo} alt={"logo"}/>
                    {/* Profile Dropdown */}
                    <ProfileDropdown />
                </div>
                <div className="sbar-container">
                    <Searchbar />
                </div>



            </div>
        </div>
    )
}
import React from 'react'
import './BoardHeader.scss'
import user1 from "../../../Assets/sample_users/user1.jpg";
import user2 from "../../../Assets/sample_users/user2.jpg";
import user3 from "../../../Assets/sample_users/user3.jpg";

export const BoardHeader = () => {
    return (
        <div className="board-header-container">
            <div className="board-header">
                <div className="users-row">
                    <div className="user-avatar-container" style={{ backgroundImage: "url(" + user1 + ")",}}> </div>
                    <div className="user-avatar-container" style={{ backgroundImage: "url(" + user2 + ")",}}> </div>
                    <div className="user-avatar-container" style={{ backgroundImage: "url(" + user3 + ")",}}> </div>
                    <div className="user-add pointer">+</div>
                </div>
            </div>
        </div>
    )
}
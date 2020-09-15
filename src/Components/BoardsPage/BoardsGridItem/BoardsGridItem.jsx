import React from 'react'
import './BoardsGridItem.scss'
import sample1 from "../../../Assets/samples/sample1.jpg";
import user1 from '../../../Assets/sample_users/user1.jpg'
import user2 from '../../../Assets/sample_users/user2.jpg'
import user3 from '../../../Assets/sample_users/user3.jpg'
export const BoardsGridItem = ({boardName,backgroundImage}) => {
    return(
        <div className="boards-grid-item">
            <div className="grid-item-image-container" style={{ backgroundImage: "url(" + backgroundImage + ")",}}> </div>
            <p className="grid-item-title pointer">{boardName}</p>
            <div className="users-row">
                <div className="user-avatar-container" style={{ backgroundImage: "url(" + user1 + ")",}}> </div>
                <div className="user-avatar-container" style={{ backgroundImage: "url(" + user2 + ")",}}> </div>
                <div className="user-avatar-container" style={{ backgroundImage: "url(" + user3 + ")",}}> </div>
                <p className="remaining-users">+ 5 others</p>
            </div>
        </div>
    )
}
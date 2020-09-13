import React from 'react'
import './BoardsPageHeader.scss'

export const BoardsPageHeader = () => {
    return(
        <div className="boards-page-header-container">
            <div className="boards-page-header-top">
                <p className="boards-header-title">All Boards</p>
                <div className="add-button pointer"><span className='add-icon'>+</span><span>Add</span></div>
            </div>
        </div>
    )
}
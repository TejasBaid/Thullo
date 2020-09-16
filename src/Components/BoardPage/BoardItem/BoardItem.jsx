import React from 'react'
import './BoardItem.scss'

export const BoardItem = ({itemTitle}) => {
    return(
        <div className="board-item">
            <p className="board-item-title">{itemTitle}</p>
        </div>
    )
}
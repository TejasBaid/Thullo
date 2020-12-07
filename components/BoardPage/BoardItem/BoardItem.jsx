import React from 'react'

export const BoardItem = ({itemTitle , image}) => {
    return(
        <div className="board-item" >
            {
                image === null ? null : <div className="board-item-image-container" style={{ backgroundImage: "url(" + image + ")",}}> </div>
            }
            <p className="board-item-title">{itemTitle}</p>
        </div>
    )
}

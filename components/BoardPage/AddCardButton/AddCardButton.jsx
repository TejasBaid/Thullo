import React from 'react'

export const AddCardButton = ({type}) => {
    return (
        <div className="add-card-button pointer">
            { type === "card" ? <div className="acb-text">Add another card</div> : <div className="acb-text">Add another list</div> }
            <div className="acb-icon pointer">+</div>
        </div>
    )
}

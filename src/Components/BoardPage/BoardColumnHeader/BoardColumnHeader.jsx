import React from 'react'
import './BoardColumnHeader.scss'
import {BsThreeDots} from "react-icons/bs/index";

export const BoardColumnHeader = ({title}) => {
    return(
        <div className="column-header">
            <p className="column-header-text">{title}</p>
            <BsThreeDots className="column-header-settings-icon pointer" />
        </div>
    )
}
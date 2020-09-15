import React, {useContext} from 'react'
import './BoardsPageHeader.scss'
import {addBoard} from "../../../Helpers/BoardsPageHelper";
import {BoardContext} from "../../../Context/BoardContext";

export const BoardsPageHeader = () => {
    const {setBoards} = useContext(BoardContext)
    return(
        <div className="boards-page-header-container">
            <div className="boards-page-header-top">
                <p className="boards-header-title">All Boards</p>
                <div className="add-button pointer" onClick={() => addBoard(setBoards)}><span className='add-icon'>+</span><span>Add</span></div>
            </div>
        </div>
    )
}
import React, {useContext} from 'react'
import './AllBoardsPageGrid.scss'
import {AllBoardsGridItem} from "../AllBoardsGridItem/AllBoardsGridItem";
import {BoardContext} from "../../../Context/BoardContext";
import uuid from 'react-uuid';

export const AllBoardsPageGrid = () => {
    const {boards} = useContext(BoardContext)
    return(
        <div className="boards-page-grid">
            {boards.map((board) => {
                return <AllBoardsGridItem key={uuid()} boardName={board.boardName} backgroundImage={board.backgroundImage} />
            })}

        </div>
    )
}
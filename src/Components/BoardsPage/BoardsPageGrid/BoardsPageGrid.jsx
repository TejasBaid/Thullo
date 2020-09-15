import React, {useContext} from 'react'
import './BoardsPageGrid.scss'
import {BoardsGridItem} from "../BoardsGridItem/BoardsGridItem";
import {BoardContext} from "../../../Context/BoardContext";
import uuid from 'react-uuid';

export const BoardsPageGrid = () => {
    const {boards} = useContext(BoardContext)
    return(
        <div className="boards-page-grid">
            {boards.map((board) => {
                return <BoardsGridItem key={uuid()} boardName={board.boardName} backgroundImage={board.backgroundImage} />
            })}

        </div>
    )
}
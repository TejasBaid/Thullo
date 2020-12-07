import React, {useContext} from 'react'
import {AllBoardsGridItem} from "../AllBoardsGridItem/AllBoardsGridItem";
import {AllBoardsContext} from "../../../Context/AllBoardsContext";
import uuid from 'react-uuid';

export const AllBoardsPageGrid = () => {
    const {boards} = useContext(AllBoardsContext)
    return(
        <div className="boards-page-grid">
            {boards.map((board) => {
                return <AllBoardsGridItem key={uuid()} boardName={board.boardName} backgroundImage={board.backgroundImage} />
            })}

        </div>
    )
}

import React from 'react'
import './BoardsPageGrid.scss'
import sample1 from '../../../Assets/samples/sample1.jpg'
import sample2 from '../../../Assets/samples/sample2.jpg'
import {BoardsGridItem} from "../BoardsGridItem/BoardsGridItem";

export const BoardsPageGrid = () => {
    return(
        <div className="boards-page-grid">
            <BoardsGridItem boardName="Devchallenges Board" backgroundImage={sample1} />
            <BoardsGridItem boardName="Test Board" backgroundImage={sample2} />

        </div>
    )
}
import React from 'react'
import './BoardsPage.scss'
import {Header} from "../Header/Header";
import {BoardsPageHeader} from "./BoardsPageHeader/BoardsPageHeader";
import {BoardsPageGrid} from "./BoardsPageGrid/BoardsPageGrid";

export const BoardsPage = () => {
    return(
        <div className="boards-page-container">
            <div className="boards-page-header">
                <Header />
            </div>
            <div className="boards-page">
                <BoardsPageHeader />
                <BoardsPageGrid />
            </div>
        </div>
    )
}
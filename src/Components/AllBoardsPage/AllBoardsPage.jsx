import React from 'react'
import './AllBoardsPage.scss'
import {Header} from "../Header/Header";
import {BoardsPageHeader} from "./AllBoardsPageHeader/BoardsPageHeader";
import {AllBoardsPageGrid} from "./AllBoardsPageGrid/AllBoardsPageGrid";

export const AllBoardsPage = () => {
    return(
        <div className="boards-page-container">
            <div className="boards-page-header">
                <Header />
            </div>
            <div className="boards-page">
                <BoardsPageHeader />
                <AllBoardsPageGrid />
            </div>
        </div>
    )
}
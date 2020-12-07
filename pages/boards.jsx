import React from 'react'
import {Header} from "../components/Header/Header";
import {BoardsPageHeader} from "../components/AllBoardsPage/AllBoardsPageHeader/BoardsPageHeader";
import {AllBoardsPageGrid} from "../components/AllBoardsPage/AllBoardsPageGrid/AllBoardsPageGrid";

const AllBoardsPage = () => {
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
export default AllBoardsPage

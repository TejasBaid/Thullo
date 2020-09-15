import React from 'react'
import './BoardPage.scss'
import {Header} from "../Header/Header";

export const BoardPage = () => {
    return(
        <div className="board-page-container">
            <Header />
            <div className="board-page">
                <div className="board">
                    board
                </div>
            </div>
        </div>
    )
}
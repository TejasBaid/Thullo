import React, {useContext} from 'react'
import './BoardPage.scss'
import {Header} from "../Header/Header";
import {BoardHeader} from "./BoardHeader/BoardHeader";
import {BoardColumn} from "./BoardColumn/BoardColumn";
import {BoardContext} from "../../Context/BoardContext";



export const BoardPage = () => {
    const {board,setBoard} = useContext(BoardContext)
    return(
        <div className="board-page-container">
            <Header />
            <div className="board-page">
                <BoardHeader />
                <div className="board">
                    {
                        board.data.map((data) => (
                            <BoardColumn name={data.name} items={data.items} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
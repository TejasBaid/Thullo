import React, {useContext} from 'react'
import './BoardPage.scss'
import {Header} from "../Header/Header";
import {BoardHeader} from "./BoardHeader/BoardHeader";
import {BoardColumn} from "./BoardColumn/BoardColumn";
import {BoardContext} from "../../Context/BoardContext";
import {AddCardButton} from "./AddCardButton/AddCardButton";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {onDragEnd} from "../../Helpers/KanbanHelper";

export const BoardPage = () => {
    const {board,setBoard} = useContext(BoardContext)
    return(
        <div className="board-page-container">
            <Header />
            <div className="board-page">
                <BoardHeader />
                <DragDropContext onDragEnd={(result) => onDragEnd(result,board,setBoard)}  >
                <div className="board">
                        {
                            Object.entries(board).map(([columnId, column], index) => (
                                <Droppable droppableId={columnId}  >
                                    {(provided,snapshot) => {
                                        return (
                                            <div key={columnId} {...provided.draggableProps} ref={provided.innerRef}>
                                                <BoardColumn key={columnId} name={column.name} items={column.items} id={columnId} />
                                                {provided.placeholder}
                                            </div>
                                        )
                                    }}
                                    </Droppable>

                            ))
                        }

                    <AddCardButton type="column" />
                </div>
                </DragDropContext>
            </div>
        </div>
    )
}
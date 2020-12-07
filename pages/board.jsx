import React, {useContext} from 'react'
import {Header} from "../components/Header/Header";
import {BoardHeader} from "../components/BoardPage/BoardHeader/BoardHeader";
import {BoardColumn} from "../components/BoardPage/BoardColumn/BoardColumn";
import {BoardContext} from "../Context/BoardContext";
import {AddCardButton} from "../components/BoardPage/AddCardButton/AddCardButton";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {onDragEnd} from "../Helpers/KanbanHelper";
import uuid from 'react-uuid'

const BoardPage = () => {
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
                                <Droppable key={uuid()} droppableId={columnId}  >
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

export default BoardPage

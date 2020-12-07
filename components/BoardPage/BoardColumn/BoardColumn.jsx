import React from 'react'
import {BoardColumnHeader} from "../BoardColumnHeader/BoardColumnHeader";
import {BoardItem} from "../BoardItem/BoardItem";
import {AddCardButton} from "../AddCardButton/AddCardButton";
import uuid from 'react-uuid'
import {Droppable,Draggable} from "react-beautiful-dnd-next";

export const BoardColumn = ({name,items,id}) => {
    return(
        <div className="board-column">
            <BoardColumnHeader title={name} />
            {
                items.map((item,index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided,snapshot) => {
                            return (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect:'none',
                                        ...provided.draggableProps.style,
                                        cursor: snapshot.isDragging ? 'grabbing' : 'grab',
                                        marginBottom: snapshot.onDragEnd ? '0' : '3vh'
                                    }}
                                >
                                    <BoardItem itemTitle={item.title} image={item.image} />
                                </div>
                            )
                        }}
                    </Draggable>
                ))
            }

            {/*<AddCardButton type="card" />*/}
        </div>
    )
}

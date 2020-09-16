import React from 'react'
import {BoardColumnHeader} from "../BoardColumnHeader/BoardColumnHeader";
import './BoardColumn.scss'
import {BoardItem} from "../BoardItem/BoardItem";
import {AddCardButton} from "../AddCardButton/AddCardButton";

export const BoardColumn = ({name,items}) => {
    return(
        <div className="board-column">
            <BoardColumnHeader title={name} />

            {
                items.map((item) => (
                    <BoardItem itemTitle={item.title} image={item.image} />
                ))
            }
            <AddCardButton type="card" />
        </div>
    )
}
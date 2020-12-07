import uuid from "react-uuid";
import bSample1 from "../Assets/board_sample/board1.jpg";
import bSample2 from "../Assets/board_sample/board2.jpg";
import bSample3 from "../Assets/board_sample/board3.jpg";
import bSample4 from "../Assets/board_sample/board4.jpg";

export const MockData = {
    [uuid()]: {
    name: "Backlog 🤔",
        id: uuid(),
        items: [
        {
            title: "Add what you'd like to work on below.",
            image: null,
            id: uuid(),
        },
        {
            title: "Git jobs challenge",
            image: bSample1,
            id: uuid(),
        },

    ]
},
    [uuid()]: {
    name: "In progress 📚",
        id: uuid(),
        items: [
        {
            title: "Move anything 'ready' here.",
            image: bSample2,
            id: uuid(),
        },
        {
            title: "Unsplash challenges Back-End",
            image: bSample3,
            id: uuid(),
        },

    ]
},
    [uuid()]: {
    name: "In review ⚙️",
        id: uuid(),
        items: [
        {
            title: "Add finishing touches for wind bnb solution",
            image: null,
            id: uuid(),
        },
    ]
},
    [uuid()]: {
    name: "Completed 🙌🏻",
        id: uuid(),
        items: [
        {
            title: "Move anything from doing to done here",
            image: bSample4,
            id: uuid(),
        },
    ]
},
}
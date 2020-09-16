import React,{createContext,useState} from 'react'
import bSample1 from '../Assets/board_sample/board1.jpg'
import bSample2 from '../Assets/board_sample/board2.jpg'
import bSample3 from '../Assets/board_sample/board3.jpg'
import bSample4 from '../Assets/board_sample/board4.jpg'

export const BoardContext = createContext()

export const BoardContextProvider = ({children}) => {
    //* Mock board
    const [board,setBoard] = useState({
        name:"DevChallenges Board",
        team:['x','y','z'],
        data:[
            {
                name:"Backlog 🤔",
                items:[
                    {
                        title:"Add what you'd like to work on below.",
                        image:null,
                    },
                    {
                        title:"Git jobs challenge",
                        image:bSample1,
                    },
                ]
            },
            {
                name:"In progress 📚",
                items:[
                    {
                        title:"Move anything 'ready' here.",
                        image:bSample2,
                    },
                    {
                        title:"Unsplash challenges Back-End",
                        image:bSample3,
                    },
                ]
            },
            {
                name:"In review ⚙️",
                items:[
                    {
                        title:"Add finishing touches for wind bnb solution",
                        image:null,
                    },
                ]
            },
            {
                name:"Completed 🙌🏻",
                items:[
                    {
                        title:"Move anything from doing to done here",
                        image:bSample4,
                    },
                ]
            },
        ]
    })
    return(
        <BoardContext.Provider value={{board,setBoard}}>
            {children}
        </BoardContext.Provider>
    )
}

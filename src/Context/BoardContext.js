import React,{createContext,useState} from 'react'
import sample1 from '../Assets/samples/sample1.jpg'
import sample2 from '../Assets/samples/sample2.jpg'

export const BoardContext = createContext();

export const BoardContextProvder = ({children}) => {
    const [boards,setBoards] = useState([
        {
            boardName:'DevChallenges',
            backgroundImage:sample1,
        },
        {
            boardName:'Test Board',
            backgroundImage:sample2,
        }
    ])
    return(
        <BoardContext.Provider value={{setBoards,boards}}>
            {children}
        </BoardContext.Provider>
    )
}
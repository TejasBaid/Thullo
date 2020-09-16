import React,{createContext,useState} from 'react'
import sample1 from '../Assets/samples/sample1.jpg'
import sample2 from '../Assets/samples/sample2.jpg'

export const AllBoardsContext = createContext();

export const AllBoardContextProvider = ({children}) => {
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
        <AllBoardsContext.Provider value={{setBoards,boards}}>
            {children}
        </AllBoardsContext.Provider>
    )
}
import React from 'react'
import {SignupContextProvider} from "../Context/SignupContext";
import {LoginContextProvider} from "../Context/LoginContext";
import {AllBoardContextProvider} from "../Context/AllBoardsContext";
import {BoardContextProvider} from "../Context/BoardContext";

export const Contexts = ({children}) => {
    return(
        <SignupContextProvider>
            <LoginContextProvider>
                <AllBoardContextProvider>
                    <BoardContextProvider>
                        {children}
                    </BoardContextProvider>
                </AllBoardContextProvider>
            </LoginContextProvider>
        </SignupContextProvider>
    )
}

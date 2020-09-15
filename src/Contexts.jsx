import React from 'react'
import {SignupContextProvider} from "./Context/SignupContext";
import {LoginContextProvider} from "./Context/LoginContext";
import {BoardContextProvder} from "./Context/BoardContext";

export const Contexts = ({children}) => {
    return(
        <SignupContextProvider>
            <LoginContextProvider>
                <BoardContextProvder>
                    {children}
                </BoardContextProvder>
            </LoginContextProvider>
        </SignupContextProvider>
    )
}
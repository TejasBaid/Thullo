import React from 'react'
import {SignupContextProvider} from "../Context/SignupContext";
import {LoginContextProvider} from "../Context/LoginContext";

export const Contexts = ({children}) => {
    return(
        <SignupContextProvider>
            <LoginContextProvider>
                {children}
            </LoginContextProvider>
        </SignupContextProvider>
    )
}
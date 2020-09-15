import React,{useState,createContext} from 'react'

export const LoginContext = createContext()

export const LoginContextProvider = ({children}) => {
    const [fieldsData,setFieldsData] = useState({
        email:'',
        password:''
    })
    const Fields = [
        {
            name:'email',
            placeholder:'Email',
            type: 'email',
            value:fieldsData.email
        },
        {
            name:'password',
            placeholder:'Password',
            type: 'password',
            value:fieldsData.password
        }
    ]
    return (
        <LoginContext.Provider value={{Fields,setFieldsData}}>
            {children}
        </LoginContext.Provider>
    )
}
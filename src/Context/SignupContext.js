import React,{createContext,useState} from 'react';
export const SignupContext = createContext()

export const SignupContextProvider = ({children}) => {
    const [fieldsData, setFieldsData] = useState(
        {
            name: '',
            email:'',
            password:'',
            confirmPassword:'',
        }
    );
    const Fields = [
        {
            name:'name',
            placeholder:'Full Name',
            type:'name',
            value:fieldsData.name,
        },
        {
            name:'email',
            placeholder:'Email',
            type:'email',
            value:fieldsData.email,
        },
        {
            name:'password',
            placeholder:'Password',
            type:'password',
            value:fieldsData.password,
        },
        {
            name:'confirm_password',
            placeholder:'Confirm Password',
            type:'password',
            value:fieldsData.confirmPassword,
        },
    ]
    return (
        <SignupContext.Provider value={{Fields,setFieldsData}}>
            {children}
        </SignupContext.Provider>
    )
}
import React, {useContext} from 'react'

import {AuthHeader} from "../components/Auth/AuthHeader";
import {FormInput} from "../components/Auth/FormInput";
import {SocialsRow} from "../components/Auth/SocialsRow";
import {LoginContext} from "../Context/LoginContext";
import uuid from "react-uuid"

const Login = () => {
    const {Fields} = useContext(LoginContext)
    const {setFieldsData} = useContext(LoginContext)
    return (
        <div className="authpage">
            <div className="auth-form">
                <AuthHeader />
                <div className="form-inputs-container">
                    {Fields.map((field) => {
                            return <FormInput key={uuid()} placeholder={field.placeholder} fieldFunction={setFieldsData} name={field.name} value={field.value} type={field.type} />
                        })}
                    <div className="submit-button">
                        Login
                    </div>

                    <SocialsRow />

                </div>
            </div>
        </div>
    )
}
export default Login

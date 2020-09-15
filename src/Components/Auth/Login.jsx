import React, {useContext} from 'react'
import './Auth.scss'
import {AuthHeader} from "./AuthHeader";
import {FormInput} from "./FormInput";
import {SocialsRow} from "./SocialsRow";
import {LoginContext} from "../../Context/LoginContext";
import uuid from "react-uuid"

export const Login = () => {
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
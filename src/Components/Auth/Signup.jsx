import React, {useContext} from 'react'
import './Auth.scss'
import {AuthHeader} from "./AuthHeader";
import {FormInput} from "./FormInput";
import {SocialsRow} from "./SocialsRow";
import {SignupContext} from "../../Context/SignupContext";
import uuid from "react-uuid";

export const Signup = () => {
    const {Fields} = useContext(SignupContext);
    const {setFieldsData} = useContext(SignupContext)
    return (
        <div className="authpage">
            <div className="auth-form">
                <AuthHeader />
                <div className="form-inputs-container">
                    {Fields.map((field) => {
                            return <FormInput key={uuid()} placeholder={field.placeholder} fieldFunction={setFieldsData} name={field.name} value={field.value} type={field.type} />
                        })}
                    <div className="submit-button">
                        Create Account
                    </div>
                    <SocialsRow />
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import './Auth.scss'
import {AuthHeader} from "./AuthHeader";
import {FormInput} from "./FormInput";
import {SocialsRow} from "./SocialsRow";

export const Login = () => {
    return (
        <div className="authpage">
            <div className="auth-form">
                <AuthHeader />
                <div className="form-inputs-container">
                    {/* Email Field  */}
                    <FormInput placeholder={"Email"} type={"email"} />
                    {/* Password Field  */}
                    <FormInput placeholder={"Password"} type={"password"} />

                    <div className="submit-button">
                        Login
                    </div>

                    <SocialsRow />

                </div>
            </div>
        </div>
    )
}
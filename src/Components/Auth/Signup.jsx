import React from 'react'
import './Auth.scss'
import {AuthHeader} from "./AuthHeader";
import {FormInput} from "./FormInput";
import {SocialsRow} from "./SocialsRow";

export const Signup = () => {
    return (
        <div className="authpage">
            <div className="auth-form">
                <AuthHeader />
                <div className="form-inputs-container">
                    {/* Name Field  */}
                    <FormInput placeholder={"Full Name"} type={"name"} />
                    {/* Email Field  */}
                    <FormInput placeholder={"Email"} type={"email"} />
                    {/* Password Field  */}
                    <FormInput placeholder={"Password"} type={"password"} />
                    {/* Confirm Password Field  */}
                    <FormInput placeholder={"Confirm Password"} type={"password"} />

                    <div className="submit-button">
                        Create Account
                    </div>

                    <SocialsRow />

                </div>
            </div>
        </div>
    )
}
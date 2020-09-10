import React from 'react'
import './Auth.scss'
import {FaUser,FaEnvelope,FaLock} from 'react-icons/fa'
import Facebook from '../../Assets/Facebook.svg'
import Github from '../../Assets/Gihub.svg'
import Twitter from '../../Assets/Twitter.svg'
import Google from '../../Assets/Google.svg'
import {AuthHeader} from "./AuthHeader";

export const Login = () => {
    return (
        <div className="authpage">
            <div className="auth-form">
                <AuthHeader />
                <div className="form-inputs-container">

                    {/* Email Field  */}
                    <div className="form-input-box">
                        <FaEnvelope className="input-icon" />
                        <input className="form-input" placeholder="Email"/>
                    </div>
                    {/* Password Field  */}
                    <div className="form-input-box">
                        <FaLock className="input-icon" />
                        <input className="form-input" placeholder="Password"/>
                    </div>


                    <div className="submit-button">
                        Login
                    </div>

                    <p className="socialsignin">Or continue with your social profiles</p>

                    <div className="srow">
                        <div className="social-row">
                            <img className={'social-icons'} src={Google} />
                            <img className={'social-icons'} src={Facebook} />
                            <img className={'social-icons'} src={Twitter} />
                            <img className={'social-icons'} src={Github} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
import React from 'react'
import logo from '../../Assets/logo.svg'

export const AuthHeader = () => {
    return(
        <div className="auth-header">
            <div className="logo-section">
                <img className={'header-logo'} src={logo} alt={"logo"} />
            </div>
        </div>
    )
}
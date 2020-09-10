import React from 'react'
import {FaEnvelope,FaUserAlt,FaLock} from "react-icons/fa/index";

export const FormInput = ({placeholder,type}) => {
    return (
        <div className="form-input-box">
            { //Check if message failed
                (type === 'name')
                    ? <FaUserAlt className="input-icon" />
                    : (type === 'email')
                        ? <FaEnvelope className="input-icon" />
                    :(type === 'password')
                        ? <FaLock className="input-icon" />
                    :null
            }

            <input className="form-input" placeholder={placeholder}/>
        </div>
    )
}
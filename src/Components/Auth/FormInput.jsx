import React from 'react'
import {FaEnvelope,FaUserAlt,FaLock} from "react-icons/fa/index";
import {handleChange} from "../../Helpers/FormHelper";

export const FormInput = ({placeholder,type,name,fieldFunction}) => {
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

            <input name={name} onChange={(e) => handleChange(e,fieldFunction)} className="form-input" placeholder={placeholder}/>
        </div>
    )
}
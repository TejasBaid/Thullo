import React from 'react'
import {FaEnvelope} from "react-icons/fa/index";

export const FormInput = (params) => {
    return (
        <div className="form-input-box">
            <FaEnvelope className="input-icon" />
            <input className="form-input" placeholder="Email"/>
        </div>
    )
}
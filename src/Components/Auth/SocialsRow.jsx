import React from 'react'
import './Auth.scss'
import Google from "../../Assets/Google.svg";
import Facebook from "../../Assets/Facebook.svg";
import Twitter from "../../Assets/Twitter.svg";
import Github from "../../Assets/Gihub.svg";

export const SocialsRow = () => {
    return (
        <div className="socials-row">
            <p className="socialsignin">Or continue with your social profiles</p>
            <div className="srow">
                <div className="social-row">
                    <img className={'social-icons'} alt={"logo"} src={Google} />
                    <img className={'social-icons'} alt={"logo"} src={Facebook} />
                    <img className={'social-icons'} alt={"logo"} src={Twitter} />
                    <img className={'social-icons'} alt={"logo"} src={Github} />
                </div>
            </div>
        </div>
    )
}
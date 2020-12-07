import React from 'react'
import Google from "../../Assets/socials/Google.svg";
import Facebook from "../../Assets/socials/Facebook.svg";
import Twitter from "../../Assets/socials/Twitter.svg";
import Github from "../../Assets/socials/Gihub.svg";

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

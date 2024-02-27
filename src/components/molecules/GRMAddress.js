import React from 'react'
import GRM_Logo from '../../images/_partials/logos/GRM_Logo.jpeg'
import { NavLink } from 'react-router-dom'
import MailLogo from '../../svgs/mails/Mail_(iOS).svg'
function GRMAddress() {
    
    return (
        <div id="GRM_address" 
            className="flex flex-column justify-between items-center
                w-100 pa1-00
                f1-00 tl bg-white-80 blue0" 
            itemType=""
        >
            <figure id="aesl_address--LogoAndName" 
                className="flex flex-column justify-center items-center
                    w-100 mb0-50 br0-50 "
            >
                <img src={GRM_Logo} 
                    alt="" 
                    className="w5-00 mb0-50 "
                />
                <div  className="tc ttu b">
                    Global Repentance Missions

                </div>
            </figure>

            <span className="dib f0-75 w-100 tc mb0-50" 
                
            >
                <div className="mb0-25">
                <br/> Head Office
                </div> 
                <div className="mb0-25">
                    FRUITFUL GROUNDS
                </div> 
                <div className="mb0-25">
                    POST  OFFICE BOX RY 404
                </div> 
                <div className="mb0-25">
                    KUMASI-ASHANTI
                </div> 
                <div className="mb0-25">
                    GHANA
                </div> 
            </span>
            
            <div id="aesl_address--email" 
                className="flex flex-column justify-center 
                    items-center
                    f0-75"
            >
                <NavLink to="" 
                    title="Send us an email." 
                    target="_blank" 
                    className="tc" 
                    rel="noopener noreferrer"
                >
                    <p className="flex items-center justify-between 
                        w-100
                        pv0-25 ph1-00
                        ba br5-00 mb0-50 
                        b b--white-90"> 
                        <img src={MailLogo}
                            alt="WhatsApp" 
                            className="w2-00 mr0-50"
                        />globalmissionschapel@gmail.com
                    </p>
                </NavLink>
            </div>

            <p className="lh-copy tj i "
            >
                The GLOBAL REPENTANCE MISSIONS (GRM) is Pentecostal Church and runs Episcopal kind of administration. It has its headquarters at Kumasi Ashanti.  The name of the church shall be GLOBAL REPENTANCE MISSIONS, GRM for short..
            </p>

            <b>
                All rights reserved GRM ©2024
            </b>
        </div>
    )
}

export default GRMAddress

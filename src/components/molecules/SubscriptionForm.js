import { NavLink } from 'react-router-dom'
// Social Media SVGs Icons
import twitterLogo from '../../svgs/socialMedia/twitter.svg';
import youTubeLogo from '../../svgs/socialMedia/youtube-symbol-svgrepo-com.svg';
import faceBookLogo from '../../svgs/socialMedia/facebook.svg';
import linkeInLogo from '../../svgs/socialMedia/linkedin.svg';
// import whatsAppLogo from '../../svgs/socialMedia/whatsApp.svg'

function SubscriptionForm() {
  return (
    <form className="h-100" 
        action=""
    >
        <fieldset 
            className="flex flex-column justify-between 
                pv1-00 
                white-90"
        >
            <legend className="ph0-50"
            >
                GRM SUBSCRIPTIONS
            </legend>
            <p>
                You can connect through any of our social media handles.
            </p>
            <nav id="m__socialMediaNav" 
                className="flex w-100 mv1-00" 
                tabIndex="0"
            >
                <ul id="social_media_list" 
                    className=" flex justify-around items-center 
                        w-100"
                >
                    <li className="pa0-25 
                        ba br5-00 
                        b--white bg-white"
                    > 
                        <NavLink to="/" 
                            title="Follow GRM on Twitter" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={twitterLogo}
                                alt="twitter logo" 
                                className="w1-00"
                            />
                        </NavLink>
                    </li>
                    <li className="pa0-25 
                        ba br5-00 
                        b--white bg-white"
                    > 
                        <NavLink to="" 
                            title="Follow GRM on Facebook" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={faceBookLogo}
                                alt="Facebook Logo" 
                                className="w1-00"
                            />
                        </NavLink>
                    </li>
                    <li className="pa0-25 
                        ba br5-00 
                        b--white bg-white"
                    >
                        <NavLink to="" 
                            title="Connect with GRM on LinkedIn" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={linkeInLogo} 
                                alt="LinkedIn Logo" 
                                className="w1-00"
                            />
                        </NavLink>
                    </li>
                    <li className="pa0-25 
                        ba br5-00 
                        b--white bg-white"
                    >
                        <NavLink to="" 
                            title="Follow GRM on youtube" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={youTubeLogo}
                                alt="YouTube Logo" 
                                className="w1-00"
                            />
                        </NavLink>
                    </li>
                    {/*<li className="pa0-25 
                        ba br5-00 
                        b--white bg-white"
                    > 
                            <NavLink to="" 
                            title="Get In Touch with GRM on WhatsApp" 
                            target="" 
                            rel="noopener noreferrer"
                        >
                            <img src={whatsAppLogo} 
                                alt="WhatsApp Logo" 
                                className="w1-00"
                            />
                        </NavLink>  
                    </li>*/}
                </ul> 
            </nav>
            <p>
                You can also send a direct mail to ....
            </p> 
            <div forhtml="email" 
                className="dib pb1-00 w-100"
            >
                <p>Send mail to:</p> 
                <a href="mailto:"
                    className='white-90 '
                ><br />
                    info@grm.com.gh
                </a>
            </div>
        </fieldset>
    </form>
  )
}

export default SubscriptionForm

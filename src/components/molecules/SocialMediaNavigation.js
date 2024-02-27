
import { Link } from 'react-router-dom';

// Social Media SVGs Icons
import twitterLogo from '../../svgs/socialMedia/twitter.svg';
import youTubeLogo from '../../svgs/socialMedia/youtube-symbol-svgrepo-com.svg';
import faceBookLogo from '../../svgs/socialMedia/facebook.svg';
import linkeInLogo from '../../svgs/socialMedia/linkedin.svg';
// import whatsAppLogo from '../../svgs/socialMedia/whatsApp.svg'


function SocialMediaNavigation() {
    return (
        <ul id="social_media_list" 
            className=" flex justify-around items-center 
                w-100"
        >
            <li className="pa0-25 
                ba br5-00 b--blue0"
            > 
                <Link to="/" 
                    title="Follow GRM on Twitter" 
                    target="" 
                    rel="noopener noreferrer"
                >
                    <img src={twitterLogo}
                        alt="twitter logo" 
                        className="w1-00"
                    />
                </Link>
            </li>
            <li className="pa0-25 
                ba br5-00 b--blue0"
            > 
                <Link to="/" 
                    title="Follow GRM on Facebook" 
                    target="" 
                    rel="noopener noreferrer"
                >
                    <img src={faceBookLogo} 
                        alt="Facebook Logo" 
                        className="w1-00"
                    />
                </Link>
            </li>
            <li className="pa0-25 
                ba br5-00 b--blue0"
            > 
                <Link to="/" title="Connect with GRM on LinkedIn" target="" rel="noopener noreferrer">
                    <img src={linkeInLogo} 
                        alt="LinkedIn Logo" 
                        className="w1-00"
                    />
                </Link>
                
            </li>
            <li className="pa0-25 
                ba br5-00 b--blue0"
            > 
                <Link to="/" 
                    title="Follow GRM on youtube" 
                    target="" 
                    rel="noopener noreferrer"
                >
                    <img src={youTubeLogo} 
                        alt="YouTube Logo" 
                        className="w1-00"
                    />
                </Link>
            </li>
            {/* <li className="pa0-25 
                ba br5-00 b--blue0"
            > 
                <Link to="/" 
                    title="Get In Touch with GRM on WhatsApp" 
                    target="" 
                    rel="noopener noreferrer"
                >
                    <img src={whatsAppLogo} 
                        alt="WhatsApp Logo" 
                        className="w1-00"
                    />
                </Link>
            </li> */}
        </ul>
    )
}

export default SocialMediaNavigation

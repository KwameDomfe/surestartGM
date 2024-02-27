import React from 'react';
// Links
import { Link } from 'react-router-dom';
import SGMLogo from '../molecules/SGMLogo';

import MainHeaderNavigation from '../molecules/MainHeaderNavigation';
// import SocialMediaNavigation from '../molecules/SocialMediaNavigation';
// Images
import MenuIcon from '../molecules/MenuIcon';
// import MiscLinks from '../molecules/MiscLinks';
// import menuIcon from "../../svgs/menu/menu-icon.svg";



const MainHeader = () => {
    
    return (
        <article id="o__AESLHeader" 
            className="grid gtc12 b
                w-100 h4-50 h-100-l pv0-50 container container90"
        >
            <div className="gc1s12 gc1s4-xl flex justify-between"
            >
                <div id="m__Logo" 
                    className="z-5" 
                    title="AESL Logo" 
                    aria-label="AESL Logo"
                    tabIndex="0" 
                >
                    <Link to="" 
                        className="white-90"
                    >
                        <SGMLogo />
                    </Link>
                </div>
                
                {/* <div id="m__searchForm" 
                    className="dn flex-s items-center justify-center
                        "
                >
                    <SearchForm />
                </div> */}

                <div id="m__menuToggle" 
                    className=" flex items-center justify-center dn-xl
                        pointer"
                >
                    <MenuIcon/>
                </div>
            </div>

            
            <div className="gc5s8 flex items-center"
            >
                <nav id="m__mainNav" 
                    className="dn flex-xl items-center-xl justify-center-xl
                        w-100 
                    "
                >
                    <MainHeaderNavigation />
                </nav>

                {/* <nav id="m__socialMediaNav" 
                    className="dn flex-xl mv1-00 w-50" 
                    tabIndex="0"
                >
                    <SocialMediaNavigation />
                </nav> */}
            </div>
    
        </article>
    )
  }
  
export default MainHeader
// import { Link } from 'react-router-dom'

import banner_2024 from '../../../images/index/0101.jpg'

function HeroSection() {

    return (

        <article id="HeroSection"
            className="grid gtc12 tc h-100 w-100"
        >
            <img id="HeroSection__Banner"
                src={banner_2024}
                alt=""
                className="gc1s12 gr1s1 vh-60 bg-gray cover"
            />

            <div id="HeroSection__Overlay"
                className="grid gc1s12 gr1s1 
                    items-center justify-center bg-black-30 vh-60"
            >
            </div>

            <div id="HeroSection__Highlights"
                className="gc1s12
                    flex justify-between items-center 
                    container container90  
                    pv4-00"
            >
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card I
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card II
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card III
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card I
                </div>
                <div className="grid items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card II
                </div>
                <div className="flex items-center justify-center 
                    w6-00 h6-00 
                    bg-black-50 
                    ba br5-00"
                >
                    card III
                </div>
            </div>
        </article>
    )
}

export default HeroSection

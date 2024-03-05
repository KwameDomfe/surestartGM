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
                className="gc1s12 gr2s1
                    flex justify-around items-center 
                    container container90  
                    pv2-00"
            >
                <div className="flex flex-column items-center justify-center
                    w12-00 h12-00 
                    bg-secondary
                    gold
                    ba bw3 br-100"
                >
                    <h2 className="f3-00 mb1-00">500<sup className="f2-00">+</sup></h2>
                    
                    <h2 className="">Pupils</h2>
                    
                </div>
                <div className="flex flex-column items-center justify-center
                    w12-00 h12-00 
                    
                    bg-secondary
                    gold
                    ba bw3 br-100"
                >
                    <h2 className="f3-00 mb1-00">50<sup className="f2-00">+</sup></h2>
                    
                    <h2 className="">Educational Trips</h2>
                    
                </div>
                <div className="flex flex-column items-center justify-center
                    w12-00 h12-00 
                    bg-secondary
                    gold
                    ba bw3 br-100"
                >
                    <h2 className="f3-00 mb1-00">34<sup className="f2-00">+</sup></h2>
                    
                    <h2 className="">Staff</h2>
                    
                </div>
                <div className="flex flex-column items-center justify-center
                    w12-00 h12-00 
                    bg-secondary
                    gold
                    ba bw3 br-100"
                >
                    <h2 className="f3-00 mb1-00">200<sup className="f2-00">+</sup></h2>
                    
                    <h2 className="">Preschool Population</h2>
                    
                </div>
            </div>
        </article>
    )
}

export default HeroSection

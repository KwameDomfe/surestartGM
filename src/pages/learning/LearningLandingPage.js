import Preschool from '../../components/organisms/learningBanners/Preschool'
import LowerPrimary from '../../components/organisms/learningBanners/LowerPrimary'
import UpperPrimary from '../../components/organisms/learningBanners/UpperPrimary'
import JuniorHigh from '../../components/organisms/learningBanners/JuniorHigh'

function LearningLandingPage() {
    
    return (
        <div className="grid gtc12 
            flex item-center justify-center ml1-00 ggap1-00 white-90 bg-blue2 pa1-00"
        >
          
                <hgroup className="gc1s12 gr1s1 
                    w-100 
                    blue0 
                    tc"
                >
                    <h1 className="ph1-00 pt0-00 mv1-50
                        f3-00 ttu"
                    >
                        Learning
                    </h1>
                </hgroup>

                <section id="" 
                    className="gc1s8 gr3s1 flex items-center justify-center
                        min-vh-80
                        bg-gold 
                        ba"
                >
                    <Preschool />
                </section>
                <section id="" 
                    className="gc5s8 gr4s1 flex items-center justify-center 
                        min-vh-80 
                        bg-black-50"
                >
                    <LowerPrimary />
                </section>
                <section id="" 
                    className="gc1s8 gr5s1 flex items-center justify-center
                    min-vh-80 bg-secondary ba"
                >
                    <UpperPrimary />
                </section>

                <section id="" 
                    className="gc5s8 gr6s1 flex items-center justify-center
                    min-vh-80 
                    bg-black-50"
                >
                    <JuniorHigh />
                </section>

                <section id="" 
                    className="gc6s1 gr2s6 flex items-center justify-center
                        w1-50
                    bg-white-50 z5"
                >
                    
                </section>
                <section id="" 
                    className="gc7s1 gr2s6 flex items-center justify-center
                        w1-00
                    bg-white-50 z5"
                >
                    
                </section>
                <section id="" 
                    className="gc8s1 gr2s6 flex items-center justify-center
                        w0-50
                    bg-white-50 z5"
                >
                    
                </section>
                <section id="" 
                    className="gc9s1 gr2s6 flex items-center justify-center
                        w0-25
                    bg-white-50 z5"
                >
                    
                </section>
           
        </div>
    )
}

export default LearningLandingPage
